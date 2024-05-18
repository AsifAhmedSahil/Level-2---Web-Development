import { Request, Response } from 'express';
import { studentServices } from './student.service';
import studentValidationSchema from './student.validation';

const createStudent = async (req: Request, res: Response) => {
  try {

    // creating schema using joi
 


    const {student: studentData} = req.body;

    const {error} = studentValidationSchema.validate(studentData)

    const result = await studentServices.createStudentIntoDB(studentData);
    
    if(error){
      res.status(500).json({
        success: false,
        message: 'Something went wrong',
        error: error.details,
      });
    }

   

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
