import { NextFunction, Request, Response } from 'express';
import { studentServices } from './student.service';
// import studentValidationSchema from './student.validaion';

// import studentValidationSchema from './student.validation';
// import {z} from "zod"




const getAllStudents = async (req:Request,res:Response ,next:NextFunction) =>{
    try {
        const result = await studentServices.getAllStudentsFromDB();
        res.status(200).json({
            success: true,
            message: 'Student are retrived Successfully',
            data: result,
          });
    } catch (error) {
        next(error)
        
    }
}

// get single student from db
const getSingleStudent = async (req:Request,res:Response,next:NextFunction) =>{
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
const deleteSingleStudent = async (req:Request,res:Response,next:NextFunction) =>{
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
