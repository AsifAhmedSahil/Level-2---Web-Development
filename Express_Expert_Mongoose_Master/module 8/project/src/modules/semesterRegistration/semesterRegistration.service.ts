import httpStatus from 'http-status';
import AppError from '../../error/AppError';
import { AcademicSemester } from '../academicSemester/academicSemester.model';
import { TSemesterRegistration } from './semesterRegistration.interface';
import { semesterRegistration } from './semesterRegistration.model';
import QueryBuilders from '../../builders/QueryBuilders';

const createSemesterRegistrationIntoDB = async (
  payload: TSemesterRegistration,
) => {
  const academicSemester = payload?.academicSemester;

  // check if the semester exist or not
  const isAcademicSemesterExist =
    await AcademicSemester.findById(academicSemester);
  console.log(isAcademicSemesterExist);

  if (!isAcademicSemesterExist) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      'This Academic semester not found in database!',
    );
  }

  // check if the semester already registered or not
  const isSemesterRegistrationExists =
    await semesterRegistration.findById(academicSemester);
  if (isSemesterRegistrationExists) {
    throw new AppError(
      httpStatus.CONFLICT,
      'This Academic semester already registered!',
    );
  }

  const result = await semesterRegistration.create(payload);
  return result;
};

const getSemesterRegistrationFromDB = async(query: Record<string, unknown>) =>{
    const registredSemester = new QueryBuilders(
        semesterRegistration.find().populate("academicSemester"),
        query
    ).filter()
    .sort()
    //   .paginate()
    .fields();

    const result = await registredSemester.modelQuery
    return result
}

const getSingleSemesterRegistrationFromDB = async(id:string) =>{

    const result = await semesterRegistration.findById(id)
    return result
}
const updateSemesterRegistrationIntoDB = async(id:string) =>{

    const result = await semesterRegistration.findById(id)
    return result
}

export const semesterRegistrationServices = {
  createSemesterRegistrationIntoDB,
  getSemesterRegistrationFromDB,
  getSingleSemesterRegistrationFromDB,
  updateSemesterRegistrationIntoDB
};
