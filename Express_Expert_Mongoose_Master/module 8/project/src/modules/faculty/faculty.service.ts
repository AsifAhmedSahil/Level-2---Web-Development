import mongoose from 'mongoose';
import QueryBuilders from '../../builders/QueryBuilders';
import { FacultySearchableFields } from './faculty.constants';
// import { TFaculty } from './faculty.interface';
import { Faculty } from './faculty.model';
import AppError from '../../error/AppError';
import httpStatus from 'http-status';
import { User } from '../user/user.model';

const getAllFacultyFromDB = async (query: Record<string, unknown>) => {
  const facultyQuery = new QueryBuilders(
    Faculty.find().populate('academicDepartment'),
    query,
  )
    .search(FacultySearchableFields)
    .filter()
    .sort()
    // .paginate()
    .fields();

  const result = await facultyQuery.modelQuery;
  return result;
};

const getSingleFacultyFromDB  = async(id:string) =>{
    const result = await Faculty.findById(id).populate("academicDepartment")

    return result

}

// const updateFacultyIntoDB = async(id:string,payload:Partial<TFaculty) =>{

//     // const {name, ...remainingFacultyData} = payload

//     // const modifiedUpdatedData: Record<string,unknown> = {
//     //     ...remainingFacultyData
//     // }

//     // if()
// }
const deleteFacultyFromDB = async(id:string) =>{

   const session = await mongoose.startSession()

   try {
    session.startTransaction()

    const deletedFaculty = await Faculty.findByIdAndUpdate(
        id,
        {isDeleted:true},
        {new:true , session}
    )

    if(!deletedFaculty){
        throw new AppError(httpStatus.BAD_REQUEST,"Failed to delete faculty ")
    }

    // get user id from deleted facuty data
    const userId = deletedFaculty.user

    const deleteUser = await User.findByIdAndUpdate(
        userId,
        {isDeleted:true},
        {new:true , session}
    )
    if(!deleteUser){
        throw new AppError(httpStatus.BAD_REQUEST,"Failed to delete user!")
    }

    session.commitTransaction()
    session.endSession()
    return deletedFaculty
    
   } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw new AppError(httpStatus.BAD_REQUEST,"Failed to delete Faculty!")
    
   }
}



export const facultyServices = {
  getAllFacultyFromDB,
  getSingleFacultyFromDB,
//   updateFacultyIntoDB,
  deleteFacultyFromDB
};
