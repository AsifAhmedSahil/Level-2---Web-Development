/* eslint-disable no-unused-vars */
import { studentServices } from './student.service';
import catchAsync from '../../utils/catchAsync';
// import studentValidationSchema from './student.validaion';

// import studentValidationSchema from './student.validation';
// import {z} from "zod"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getAllStudents  = catchAsync(async (req,res ) =>{
    
        const result = await studentServices.getAllStudentsFromDB();
        res.status(200).json({
            success: true,
            message: 'Student are retrived Successfully',
            data: result,
          });
    } 
)

// get single student from db
const getSingleStudent  = catchAsync(async (req,res) =>{
    
    const {studentId}  = req.params
    console.log(studentId)
    const result = await studentServices.getSingleStudentFromDB(studentId);
    res.status(200).json({
        success: true,
        message: 'Student is retrived Successfully',
        data: result,
      });
// eslint-disable-next-line @typescript-eslint/no-explicit-any

})
const updateSingleStudent  = catchAsync(async (req,res) =>{
    
    const {studentId}  = req.params
    const {student} = req.body
    const result = await studentServices.updateStudentFromDB(studentId,student);
    res.status(200).json({
        success: true,
        message: 'Student updated Successfully',
        data: result,
      });
// eslint-disable-next-line @typescript-eslint/no-explicit-any
})
const deleteSingleStudent  = catchAsync(async (req,res) =>{
    
    const {studentId}  = req.params
    const result = await studentServices.deleteStudentFromDB(studentId);
    res.status(200).json({
        success: true,
        message: 'Student is deleted Successfully',
        data: result,
      });
// eslint-disable-next-line @typescript-eslint/no-explicit-any
})

export const studentController = {
    
    getAllStudents,
    getSingleStudent,
    updateSingleStudent,
    deleteSingleStudent
}
