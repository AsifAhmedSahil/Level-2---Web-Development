/* eslint-disable no-unused-expressions */
/* eslint-disable prefer-const */

import  { ErrorRequestHandler, } from 'express';
import { ZodError, ZodIssue } from 'zod';
import { TErrorSource } from '../interface/error';
import config from '../app/config';
// eslint-disable-next-line @typescript-eslint/no-explicit-any, no-unused-vars, @typescript-eslint/no-unused-vars
const globalErrorHandler : ErrorRequestHandler = (err,req, res, next) =>{
    let statusCode = err.statusCode || 500;
    let message =  err.message || "something went wrong!"
    
    let errorSources : TErrorSource = [
      {
        path:"",
        message: "Something went wrong"
      }
    ]

    const handleZodError = ( err : ZodError ) =>{
      const errorSources :TErrorSource = err.issues.map((issue:ZodIssue) => {
        return {
          path: issue?.path[issue.path.length - 1],
          message:issue.message
        }
      })
      const statusCode = 400 ;
      return{
        statusCode,
        message: "Zod validation error",
        errorSources
      }
    }

    if(err instanceof ZodError){
      const simplifiedError = handleZodError(err)
      statusCode = simplifiedError.statusCode,
      message = simplifiedError.message,
      errorSources = simplifiedError.errorSources
       
      
     
    }


    
    return res.status(statusCode).json({
      success:false,
      message,
      // amiError:err,
      errorSources,
      stack: config.node_env === "development" ? err?.stack : null
    })
  }

  export default globalErrorHandler