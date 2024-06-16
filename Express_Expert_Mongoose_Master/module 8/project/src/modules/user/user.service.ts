import mongoose from 'mongoose';
import config from '../../app/config';
import jwt, { JwtPayload } from 'jsonwebtoken'

import { AcademicSemester } from '../academicSemester/academicSemester.model';
import { Student } from '../student.model';
import { TStudent } from '../student/student.interface';
import { TUser } from './user.interface';
// import { TUser } from "./user.interface"
import { User } from './user.model';
import {
  generateStudentId,
  generatedAdminId,
  generatedFacultyId,
} from './user.utils';
import AppError from '../../error/AppError';
import httpStatus from 'http-status';
import { TFaculty } from '../faculty/faculty.interface';
import { AcademicDepartment } from '../academicDepartment/academicDepartment.model';
import { Faculty } from '../faculty/faculty.model';
import { TAdmin } from '../admin/admin.interface';
import { Admin } from '../admin/admin.model';

const createStudentIntoDB = async (password: string, payload: TStudent) => {
  // const student = new User(studentData)
  // if(await student.isUserExist(studentData.id)){
  //     throw new Error("user already exists!")
  // }

  // if password not given then use default password
  const userData: Partial<TUser> = {};

  userData.password = password || (config.default_pass as string);

  userData.role = 'student';
  userData.email = payload.email;

  // find semester information
  const admissionSemester = await AcademicSemester.findById(
    payload.academicSemester,
  );
  console.log(admissionSemester, 'admission semester');

  const session = await mongoose.startSession();

  try {
    session.startTransaction();
    userData.id = await generateStudentId(admissionSemester);

    // create a user (transaction - 1)
    const newUser = await User.create([userData], { session });

    if (!newUser.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create user');
    }
    payload.id = newUser[0].id;
    payload.user = newUser[0]._id;

    // create a student (transaction - 2)
    const newStudent = await Student.create([payload], { session });
    if (!newStudent.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create user');
    }

    await session.commitTransaction();
    await session.endSession();

    return newStudent;
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error('Failed to create user!');
  }
};

const createFacultyIntoDB = async (password: string, payload: TFaculty) => {
  // first create a user , thats why create empty user object name as userData
  const userData: Partial<TUser> = {};

  // if password is not given then user default password
  userData.password = password || (config.default_pass as string);

  // set user role
  userData.role = 'faculty';
  userData.email = payload.email;

  // find department and check department is exist or not
  const academicDepartment = await AcademicDepartment.findById(
    payload.academicDepartment,
  );

  if (!academicDepartment) {
    throw new AppError(httpStatus.NOT_FOUND, 'Academic Department Not Found!');
  }

  const session = await mongoose.startSession();

  try {
    session.startTransaction();
    // set generated id
    userData.id = await generatedFacultyId();
    // create new user
    const newUser = await User.create([userData], { session });

    // create new faculty -------(step 1)

    if (!newUser.length) {
      throw new AppError(httpStatus.NOT_FOUND, 'new user not created!');
    }

    // set id for faculty & set _id for user referencing id
    payload.id = newUser[0].id;
    payload.user = newUser[0]._id;

    // create new faculty (step 2)

    const newFaculty = await Faculty.create([payload], { session });

    // check if new faculty created or not
    if (!newFaculty.length) {
      throw new AppError(httpStatus.NOT_FOUND, 'new faculty not created!');
    }

    await session.commitTransaction();
    await session.endSession();
    return newFaculty;
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error('Error');
  }
};

const createAdminIntoDB = async (password: string, payload: TAdmin) => {
  // first create a user , thats why create empty user object name as userData
  const userData: Partial<TUser> = {};

  // set password
  userData.password = password || (config.default_pass as string);

  // set role
  userData.role = 'admin';
  userData.email = payload.email;

  const session = await mongoose.startSession();

  try {
    session.startTransaction();
    // set generated id
    userData.id = await generatedAdminId();

    // create new user
    const newUser = await User.create([userData], { session });

    //create a admin
    if (!newUser.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create admin');
    }

    // set id & _id
    payload.id = newUser[0].id
    payload.user = newUser[0]._id

    // create admin (step 2)
    const newAdmin = await Admin.create([payload],{session})
    await session.commitTransaction()
    await session.endSession()
    return newAdmin
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error('error');
  }
};

const getMe = async(token:string) =>{
  const decoded = jwt.verify(token,config.jwt_access_secret as string) as JwtPayload
  const {userId , role} = decoded;
  // console.log(userId,role)
  let result = null
  if(role === 'student'){
    result = await Student.findOne({id:userId})
  }
  if(role === 'admin'){
    result = await Admin.findOne({id:userId})
  }
  if(role === 'faculty'){
    result = await Faculty.findOne({id:userId})
  }
  
  return result
  

}

export const UserServices = {
  createStudentIntoDB,
  createFacultyIntoDB,
  createAdminIntoDB,
  getMe
};
