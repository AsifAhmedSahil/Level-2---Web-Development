import { academicSemesterNameCodeMapper } from './academicSemester.constant';
import { TAcademicSemester } from './academicSemester.interface';
import { AcademicSemester } from './academicSemester.model';

const createAcademicSemesterIntoDB = async (payload: TAcademicSemester) => {
  if (academicSemesterNameCodeMapper[payload.name] !== payload.code) {
    throw new Error('Invalid Semester Code!');
  }

  const result = await AcademicSemester.create(payload);

  return result;
};

const getAllSemesterFromDB = async () => {
  const result = await AcademicSemester.find();
  return result;
};

// const getSingleSemesterFromDB = async(id:string) =>{
//     // console.log(id)
//     const result = await AcademicSemester.find({id})
//     console.log("result service",result)
//     return result
// }

const getSingleSemesterFromDB = async (id: string) => {
  const result = await AcademicSemester.findById(id);

  return result;
};

const updateSingleSemesterFromDB = async (id: string ,payload: Partial<TAcademicSemester>) => {
  if(payload.name && payload.code && academicSemesterNameCodeMapper[payload.name] !== payload.code){
    throw new Error("Invalid Semester Code!")
  }

  const result = await AcademicSemester.findOneAndUpdate({id:id},payload,{new:true});

  return result;
};

export const AcademicSemesterServices = {
  createAcademicSemesterIntoDB,
  getAllSemesterFromDB,
  getSingleSemesterFromDB,
  updateSingleSemesterFromDB
};
