import { Request, Response } from "express";
import { UserServices } from "./user.service";


const createStudent = async (req: Request, res: Response) => {
    try {
      const {password, student:studentData} = req.body;
  
      // using zod validation
    //   const zodParsedData = studentValidationSchema.parse(studentData)
  
      const result = await UserServices.createStudentIntoDB(password,studentData);
      
      
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


  export const userControllers = {
    createStudent
  }

