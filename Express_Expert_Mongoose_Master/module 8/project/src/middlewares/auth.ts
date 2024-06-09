import { NextFunction, Request, Response } from 'express';

import catchAsync from '../utils/catchAsync';
import AppError from '../error/AppError';
import httpStatus from 'http-status';
import jwt, { JwtPayload } from 'jsonwebtoken'
import config from '../app/config';
import { TUserRole } from '../modules/user/user.interface';



const auth = (...requireRoles : TUserRole[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    // console.log(req.headers.authorization)
    const token = req.headers.authorization
    console.log(token)

    if(!token){
        throw new AppError(httpStatus.UNAUTHORIZED,"You are not authorized!")
    }

    jwt.verify( token , config.jwt_access_secret as string ,function(err,decoded){
        if(err){
            throw new AppError(httpStatus.UNAUTHORIZED,"You are not authorixed")
        }

        // check role 
        const role = (decoded as JwtPayload).role

        if(requireRoles && !requireRoles.includes(role)){
            throw new AppError(httpStatus.UNAUTHORIZED,"You are not authorised")
        }


        // destructure decoded things***
        // const {userId,role} = decoded
        req.user = decoded as JwtPayload
        next()
    })


    
    
  });
};

export default auth;
