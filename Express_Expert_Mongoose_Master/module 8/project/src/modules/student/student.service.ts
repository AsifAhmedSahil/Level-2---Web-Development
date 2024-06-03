import mongoose from 'mongoose';
import { Student } from '../student.model';
import AppError from '../../error/AppError';
import httpStatus from 'http-status';
import { User } from '../user/user.model';
import { TStudent } from './student.interface';
import QueryBuilders from '../../builders/QueryBuilders';
import { studentSearchableFields } from './student.constants';

const getAllStudentsFromDB = async (query: Record<string, unknown>) => {
  const studentQuery = new QueryBuilders(Student.find().populate("academicSemester").populate({
    path: "academicDepartment",
    populate: {
        path: "academicFaculty"
    }
  }), query)
    .search(studentSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await studentQuery.modelQuery;
  return result;
};

const getSingleStudentFromDB = async (id: string) => {
  const result = await Student.findOne({ id })
    .populate('academicSemester')
    .populate({
      path: 'academicDepartment',
      populate: {
        path: 'academicFaculty',
      },
    });
  return result;
};
const updateStudentFromDB = async (id: string, payload: Partial<TStudent>) => {
  const { name, localGuirdian, guirdian, ...remainingStudentData } = payload;

  const modifiedData: Record<string, unknown> = {
    ...remainingStudentData,
  };

  if (name && Object.keys(name).length) {
    for (const [key, value] of Object.entries(name)) {
      {
        modifiedData[`name.${key}`] = value;
      }
    }
  }
  if (guirdian && Object.keys(guirdian).length) {
    for (const [key, value] of Object.entries(guirdian)) {
      {
        modifiedData[`guirdian.${key}`] = value;
      }
    }
  }
  if (localGuirdian && Object.keys(localGuirdian).length) {
    for (const [key, value] of Object.entries(localGuirdian)) {
      {
        modifiedData[`localGuirdian.${key}`] = value;
      }
    }
  }

  const result = await Student.findOneAndUpdate({ id }, modifiedData, {
    new: true,
    runValidators: true,
  });
  return result;
};
const deleteStudentFromDB = async (id: string) => {
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    // transaction - 1 ( delete student )
    const deleteStudent = await Student.findOneAndUpdate(
      { id },
      { isDeleted: true },
      { new: true, session },
    );
    // check point
    if (!deleteStudent) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed To Delete Student');
    }

    const deleteUser = await User.findOneAndUpdate(
      { id },
      { isDeleted: true },
      { new: true, session },
    );
    // check point
    if (!deleteUser) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed To Delete User');
    }

    await session.commitTransaction();
    await session.endSession();

    return deleteStudent;
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error('Failed to delete user!');
  }
};

export const studentServices = {
  getAllStudentsFromDB,
  getSingleStudentFromDB,
  updateStudentFromDB,
  deleteStudentFromDB,
};
