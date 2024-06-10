import { NextFunction, Request, Response } from 'express';

import catchAsync from '../utils/catchAsync';
import AppError from '../error/AppError';
import httpStatus from 'http-status';
import jwt, { JwtPayload } from 'jsonwebtoken'
import config from '../app/config';
import { TUserRole } from '../modules/user/user.interface';
import { User } from '../modules/user/user.model';



const auth = (...requireRoles : TUserRole[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    // console.log(req.headers.authorization)
    const token = req.headers.authorization
    console.log(token)

    if(!token){
        throw new AppError(httpStatus.UNAUTHORIZED,"You are not authorized!")
    }


    const decoded = jwt.verify(token , config.jwt_access_secret as string) as JwtPayload
    const {userId,iat,role} = decoded

    // check user is exist in database or not

    const user = await User.isUserExistsByCustomId(userId)
   
    if(!user){
        throw new AppError(httpStatus.NOT_FOUND,"This user is not exist in database")
    }

    // check user is already deleted or not
    const isDeleted = user?.isDeleted
    if(isDeleted){
        throw new AppError(httpStatus.FORBIDDEN,"This user is already deleted!")
    }

    // check user is blocked or not
    const userStatus = user?.status
    if(userStatus === 'blocked'){
        throw new AppError(httpStatus.FORBIDDEN,"This user is already blocked!")
    }

        if(requireRoles && !requireRoles.includes(role)){
            throw new AppError(httpStatus.UNAUTHORIZED,"You are not authorised")
        }
        // destructure decoded things***
        // const {userId,role} = decoded
        req.user = decoded as JwtPayload
        next()

  });
};

export default auth;
