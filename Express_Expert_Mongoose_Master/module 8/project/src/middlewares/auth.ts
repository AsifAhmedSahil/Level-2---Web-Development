import { NextFunction, Request, Response } from 'express';

import catchAsync from '../utils/catchAsync';
import AppError from '../error/AppError';
import httpStatus from 'http-status';

const auth = () => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    // console.log(req.headers.authorization)
    const token = req.headers.authorization
    console.log(token)

    if(!token){
        throw new AppError(httpStatus.UNAUTHORIZED,"You are not authorized!")
    }
    next()
    
  });
};

export default auth;
