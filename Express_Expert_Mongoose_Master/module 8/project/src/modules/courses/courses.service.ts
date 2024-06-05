/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from 'mongoose';
import QueryBuilders from '../../builders/QueryBuilders';
import { courseSearchableFields } from './courses.contants';
import { TCourse, TCourseFaculty } from './courses.interface';
import { Course, courseFaculty } from './courses.model';
import AppError from '../../error/AppError';
import httpStatus from 'http-status';

const createCoursesIntoDB = async (payload: TCourse) => {
  const result = await Course.create(payload);
  return result;
};
// const getAllCoursesFromDB = async (query: Record<string,unknown>)=>{
//     const courseQuery = new QueryBuilders(Course.find(),query)
//     .search(courseSearchableFields)
//     .filter()
//     .sort()
//     .paginate()
//     .fields()
//     const result = await courseQuery.modelQuery
//     return result
// }

const getAllCoursesFromDB = async (query: Record<string, unknown>) => {
  const courseQuery = new QueryBuilders(
    Course.find().populate('preReqsiteCourses.course'),
    query,
  )
    .search(courseSearchableFields)
    .filter()
    .sort()
    //   .paginate()
    .fields();

  const result = await courseQuery.modelQuery;
  // console.log("from service",result)
  return result;
};

const getSingleCoursesFromDB = async (id: string) => {
  const result = await Course.findById(id).populate('preReqsiteCourses.course');

  return result;
};
const deleteCoursesFromDB = async (id: string) => {
  const result = await Course.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true },
  );
  return result;
};
const updateCoursesFromDB = async (id: string, payload: Partial<TCourse>) => {
  const { preReqsiteCourses, ...coursesRemainingData } = payload;

  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    // step 1 - basic info updated***

    const updatedBasicCourseInfo = await Course.findByIdAndUpdate(
      id,
      coursesRemainingData,
      { new: true, runValidators: true, session },
    );

    if (!updatedBasicCourseInfo) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed To update course');
    }

    // check if there is any preRequisite courses
    if (preReqsiteCourses && preReqsiteCourses?.length > 0) {
      const deletedPrerequisiteCourse = preReqsiteCourses
        ?.filter((el) => el.course && el.isDeleted)
        .map((el) => el.course);
      // console.log(deletedPrerequisiteCourse)

      const deleteCourses = await Course.findByIdAndUpdate(
        id,
        {
          $pull: {
            preReqsiteCourses: { course: { $in: deletedPrerequisiteCourse } },
          },
        },
        { new: true, runValidators: true, session },
      );
      console.log(deleteCourses, 'deleteCourses');

      if (!deleteCourses) {
        throw new AppError(httpStatus.BAD_REQUEST, 'Failed To update course');
      }

      // filter out the new course fields
      const newPreRequisites = preReqsiteCourses?.filter(
        (el) => el.course && !el.isDeleted,
      );

      const newPreRequisiteCourses = await Course.findByIdAndUpdate(
        id,
        {
          $addToSet: { preRequisiteCourses: { $each: newPreRequisites } },
        },
        { new: true, runValidators: true, session },
      );

      if (!newPreRequisiteCourses) {
        throw new AppError(httpStatus.BAD_REQUEST, 'Failed To update course');
      }

      const result = await Course.findById(id).populate(
        'preReqsiteCourses.course',
      );
      return result;
    }

    await session.commitTransaction()
    await session.endSession()
    
  } catch (error) {
    await session.abortTransaction()
    await session.endSession()
    throw new AppError(httpStatus.BAD_REQUEST, 'Failed To update course');
  }
};

const assignFacultyServiceIntoDB = async(id:string,payload:Partial<TCourseFaculty>) =>{
  const result = await courseFaculty.findByIdAndUpdate(id,{
    course:id,
    $addToSet: {faculties: {$each: payload}},

  },{
    upsert:true,
    new:true
  })
  return result

}

export const CourseServices = {
  createCoursesIntoDB,
  getAllCoursesFromDB,
  getSingleCoursesFromDB,
  deleteCoursesFromDB,
  updateCoursesFromDB,
  assignFacultyServiceIntoDB
};
