import { Request, Response } from 'express';
import { studentServices } from './student.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const studentData = req.body;

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

export const studentController = {
    createStudent,
}
