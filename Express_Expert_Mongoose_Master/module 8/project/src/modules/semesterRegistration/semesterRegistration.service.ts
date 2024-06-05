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
//   check is there any registered semeter "UPCOMING" or "ONGOING"
    const isThereAnyUpcomingOrOngoingSemester = await semesterRegistration.findOne({
        $or:[
            {status: "UPCOMING"},
            {status: "ONGOING"},
        ]
    })
    if(isThereAnyUpcomingOrOngoingSemester){
        throw new AppError(
            httpStatus.BAD_REQUEST,
            `there is already a ${isThereAnyUpcomingOrOngoingSemester.status} registered semester`,
          );
    }

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
const updateSemesterRegistrationIntoDB = async(id:string, payload:Partial<TSemesterRegistration>) =>{

    // check if the semester is already exist or not***
    const isSemesterExist = await semesterRegistration.findById(id)
    if(!isSemesterExist){
        throw new AppError(httpStatus.NOT_FOUND,"this semster is not found in database")
    }


    // check is the semester is ENDED then not update this semester
    const currentSemesterStatus = isSemesterExist?.status
    const requestedSemester = payload?.status
    if(currentSemesterStatus === "ENDED"){
        throw new AppError(httpStatus.BAD_REQUEST,`this semester is already ${currentSemesterStatus}`)
    }

    // apply business logic ==> Upcoming --> Ongoing --> Ended *** 
    if(currentSemesterStatus === "UPCOMING" && requestedSemester === "ENDED"){
        throw new AppError(httpStatus.BAD_REQUEST,`Ypu can not update status directly from ${currentSemesterStatus} to ${requestedSemester}`)
    }
    if(currentSemesterStatus === "ONGOING" && requestedSemester === "UPCOMING"){
        throw new AppError(httpStatus.BAD_REQUEST,`Ypu can not update status directly from ${currentSemesterStatus} to ${requestedSemester}`)
    }
    
    const result = await semesterRegistration.findByIdAndUpdate(id,payload,{new:true , runValidators:true})
    return result
}

export const semesterRegistrationServices = {
  createSemesterRegistrationIntoDB,
  getSemesterRegistrationFromDB,
  getSingleSemesterRegistrationFromDB,
  updateSemesterRegistrationIntoDB
};
