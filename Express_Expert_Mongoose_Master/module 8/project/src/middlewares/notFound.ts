
// import { error } from 'console';
import  {  NextFunction, Request, Response} from 'express';
import httpStatus from 'http-status';
// eslint-disable-next-line @typescript-eslint/no-explicit-any, no-unused-vars, @typescript-eslint/no-unused-vars
const notFound = (req: Request, res: Response,next:NextFunction) =>{
    
  
    return res.status(httpStatus.NOT_FOUND).json({
      success:false,
      message: "Api Not Found",
      
    })
  }

  export default notFound