import { TAcademicDepartment } from './academicDepartment.interface';
import { AcademicDepartment } from './academicDepartment.model';

const createAcademicDepartmentIntoDB = async (payload: TAcademicDepartment) => {
  // check department exist or not
  const isDepartmentExist = await AcademicDepartment.findOne({
    name: payload.name,
  });
  if (isDepartmentExist) {
    throw new Error('Department Is Already Exist');
  }

  const result = await AcademicDepartment.create(payload);

  return result;
};

const getAllDepartmentsFromDB = async () => {
  const result = await AcademicDepartment.find().populate("academicFaculty");
  return result;
};

// const getSingleSemesterFromDB = async(id:string) =>{
//     // console.log(id)
//     const result = await AcademicSemester.find({id})
//     console.log("result service",result)
//     return result
// }

const getSingleDepartmentFromDB = async (id: string) => {
  const result = await AcademicDepartment.findById(id).populate("academicFaculty");

  return result;
};

const updateAcademicDepartmentIntoDB = async (
  id: string,
  payload: Partial<TAcademicDepartment>,
) => {
  const result = await AcademicDepartment.findOneAndUpdate(
    { _id: id },
    payload,
    {
      new: true,
    },
  );
  return result;
};

export const AcademicDepartmentServices = {
  createAcademicDepartmentIntoDB,
  getAllDepartmentsFromDB,
  getSingleDepartmentFromDB,
  updateAcademicDepartmentIntoDB,
};
