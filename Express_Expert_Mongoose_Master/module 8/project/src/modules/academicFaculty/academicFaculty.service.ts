import { TAcademicFaculty } from "./academicFaculty.interface";
import { AcademicFaculty } from "./academicFaculty.model";


const createAcademicFacultyIntoDB = async (payload: TAcademicFaculty) => {
  

  const result = await AcademicFaculty.create(payload);

  return result;
};

const getAllFacultiesFromDB = async () => {
  const result = await AcademicFaculty.find();
  return result;
};

// const getSingleSemesterFromDB = async(id:string) =>{
//     // console.log(id)
//     const result = await AcademicSemester.find({id})
//     console.log("result service",result)
//     return result
// }

const getSingleFacultyFromDB = async (id: string) => {
  const result = await AcademicFaculty.findById(id);

  return result;
};

const updateSingleFacultyFromDB = async (id: string ,payload: Partial<TAcademicFaculty>) => {
  

  const result = await AcademicFaculty.findOneAndUpdate({id:id},payload,{new:true});

  return result;
};

export const AcademicFacultyServices = {
   createAcademicFacultyIntoDB,
   getAllFacultiesFromDB,
   getSingleFacultyFromDB,
   updateSingleFacultyFromDB
};
