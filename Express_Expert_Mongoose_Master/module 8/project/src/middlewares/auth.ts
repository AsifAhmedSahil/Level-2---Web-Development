import { NextFunction, Request, Response } from 'express';

import catchAsync from '../utils/catchAsync';
import AppError from '../error/AppError';
import httpStatus from 'http-status';
import jwt, { JwtPayload } from 'jsonwebtoken'
import config from '../app/config';



const auth = () => {
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


        // destructure decoded things***
        // const {userId,role} = decoded
        req.user = decoded as JwtPayload
    })


    next()
    
  });
};

export default auth;
