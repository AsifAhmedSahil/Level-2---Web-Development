/* eslint-disable no-unused-vars */
import {   NextFunction, Request, RequestHandler, Response, } from 'express';
import { studentServices } from './student.service';
// import studentValidationSchema from './student.validaion';

// import studentValidationSchema from './student.validation';
// import {z} from "zod"


// **************higher order function***************
const catchAsync = (fn : RequestHandler) =>{
    return (req:Request,res:Response,next:NextFunction) =>{
        Promise.resolve(fn(req,res,next)).catch((err) => next(err))
    }
}



// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getAllStudents  = catchAsync(async (req,res ,next) =>{
    
        const result = await studentServices.getAllStudentsFromDB();
        res.status(200).json({
            success: true,
            message: 'Student are retrived Successfully',
            data: result,
          });
    } 
)

// get single student from db
const getSingleStudent : RequestHandler = async (req,res,next) =>{
    try {
        const {studentId}  = req.params
        const result = await studentServices.getSingleStudentFromDB(studentId);
        res.status(200).json({
            success: true,
            message: 'Student is retrived Successfully',
            data: result,
          });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error ) {
      next(error)
        
    }
}
const deleteSingleStudent : RequestHandler = async (req,res,next) =>{
    try {
        const {studentId}  = req.params
        const result = await studentServices.deleteStudentFromDB(studentId);
        res.status(200).json({
            success: true,
            message: 'Student is deleted Successfully',
            data: result,
          });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error ) {
      next(error)
        
    }
}

export const studentController = {
    
    getAllStudents,
    getSingleStudent,
    deleteSingleStudent
}
