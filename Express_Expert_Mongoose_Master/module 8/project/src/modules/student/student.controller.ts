import { Request, Response } from 'express';
import { studentServices } from './student.service';
import Joi from 'joi';

const createStudent = async (req: Request, res: Response) => {
  try {

    // creating schema using joi
    const JoivalidateSchema = Joi.object({
      id:Joi.string(),
      name:{
        firstName: Joi.string().max(20).required(),
        middleName: Joi.string().max(20),
        lastName:Joi.string().max(20).required()
      },
      gender: Joi.string().required(),
      
    })


    const {student: studentData} = req.body;

    const result = await studentServices.createStudentIntoDB(studentData);

    res.status(200).json({
      success: true,
      message: 'Student Create Successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
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
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Something wnt wrong',
        error: error,
      });
        
    }
}

export const studentController = {
    createStudent,
    getAllStudents,
    getSingleStudent
}
