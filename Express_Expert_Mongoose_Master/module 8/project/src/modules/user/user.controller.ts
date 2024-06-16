import { UserServices } from './user.service';
import catchAsync from '../../utils/catchAsync';
import AppError from '../../error/AppError';
import httpStatus from 'http-status';

const createStudent = catchAsync(async (req, res) => {
  const { password, student: studentData } = req.body;
  // using zod validation
  

  const result = await UserServices.createStudentIntoDB(password, studentData);

  res.status(200).json({
    success: true,
    message: 'Student Create Successfully',
    data: result,
  });
});


const createFaculty = catchAsync(async (req, res) => {
  const { password, faculty: facultyData } = req.body;
  // using zod validation
  

  const result = await UserServices.createFacultyIntoDB(password, facultyData);

  res.status(200).json({
    success: true,
    message: 'Faculty Create Successfully',
    data: result,
  });
});


const createAdmin = catchAsync(async (req, res) => {
  const { password, admin: adminData } = req.body;
  // using zod validation
  

  const result = await UserServices.createAdminIntoDB(password, adminData);

  res.status(200).json({
    success: true,
    message: 'Admin Create Successfully',
    data: result,
  });
});
const getMe = catchAsync(async (req, res) => {
  const token = req.headers.authorization
  if(!token){
    throw new AppError(httpStatus.NOT_FOUND,"Access Token Not Found")
  }

  const result = await UserServices.getMe(token);

  res.status(200).json({
    success: true,
    message: 'Get User Information successfully',
    data: result,
  });
});

export const userControllers = {
  createStudent,
  createFaculty,
  createAdmin,
  getMe
};
