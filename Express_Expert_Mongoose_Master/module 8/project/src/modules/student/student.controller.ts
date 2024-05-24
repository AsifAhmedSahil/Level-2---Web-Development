import { Request, Response } from 'express';
import { studentServices } from './student.service';
import studentValidationSchema from './student.validaion';

// import studentValidationSchema from './student.validation';
// import {z} from "zod"


const createStudent = async (req: Request, res: Response) => {
  try {
    const {student:studentData} = req.body;

    // using zod validation
    const zodParsedData = studentValidationSchema.parse(studentData)

    const result = await studentServices.createStudentIntoDB(zodParsedData);
    
    
    res.status(200).json({
      success: true,
      message: 'Student Create Successfully',
      data: result,
    });
  } catch (error :any) {
    res.status(200).json({
      success: true,
      message: error.message || 'Student Create Successfully',
      
    });
  }
};

const getAllStudents = async (req:Request,res:Response) =>{
    try {
        const result = await studentServices.getAllStudentsFromDB();
        res.status(200).json({
            success: true,
            message: 'Student are retrived Successfully',
            data: result,
          });
    } catch (error) {
        console.log(error)
        
    }
}

// get single student from db
const getSingleStudent = async (req:Request,res:Response) =>{
    try {
        const {studentId}  = req.params
        const result = await studentServices.getSingleStudentFromDB(studentId);
        res.status(200).json({
            success: true,
            message: 'Student is retrived Successfully',
            data: result,
          });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error : any) {
      res.status(500).json({
        success: false,
        message: error.message ||'Something wnt wrong',
        error: error,
      });
        
    }
}
const deleteSingleStudent = async (req:Request,res:Response) =>{
    try {
        const {studentId}  = req.params
        const result = await studentServices.deleteStudentFromDB(studentId);
        res.status(200).json({
            success: true,
            message: 'Student is deleted Successfully',
            data: result,
          });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error : any) {
      res.status(500).json({
        success: false,
        message: error.message ||'Something went wrong',
        error: error,
      });
        
    }
}

export const studentController = {
    createStudent,
    getAllStudents,
    getSingleStudent,
    deleteSingleStudent
}
