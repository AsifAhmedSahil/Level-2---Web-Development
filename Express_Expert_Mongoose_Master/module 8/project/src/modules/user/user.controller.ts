import { UserServices } from './user.service';
import catchAsync from '../../utils/catchAsync';


const createStudent = catchAsync(async (req, res) => {
  const { password, student: studentData } = req.body;
  
  // using zod validation
  

  const result = await UserServices.createStudentIntoDB(req.file , password, studentData);

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
  const {userId,role} = req.body
  const result = await UserServices.getMe(userId,role);

  res.status(200).json({
    success: true,
    message: 'Get User Information successfully',
    data: result,
  });
});

const changeStatus = catchAsync(async (req, res) => {
  const id = req.params.id
  const result = await UserServices.changeStatus(id,req.body);
  

  res.status(200).json({
    success: true,
    message: 'User Status Changed successfully',
    data: result,
  });
});

export const userControllers = {
  createStudent,
  createFaculty,
  createAdmin,
  getMe,
  changeStatus
};
