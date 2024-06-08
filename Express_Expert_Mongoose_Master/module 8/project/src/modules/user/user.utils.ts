import { TAcademicSemester } from '../academicSemester/academicSemester.interface';
import { User } from './user.model';

const findLastStudentId = async () => {
  const lastStudent = await User.findOne(
    {
      role: 'student',
    },
    {
      id: 1,
      _id: 0,
    },
  )
    .sort({
      createdAt: -1,
    })
    .lean();

  return lastStudent?.id ? lastStudent.id : undefined;
};

export const generateStudentId = async (payload: TAcademicSemester) => {
  // first time id 0000
  let currentId = (0).toString();
  const lastStudentId = await findLastStudentId();
  // console.log(lastStudentId,"laststudent id")
  // demo id - > 2023010001
  const lastStudentSemesterCode = lastStudentId?.substring(4, 6);
  const lastStudentSemesterYear = lastStudentId?.substring(0, 4);
  const currentCode = payload.code;
  const currentYear = payload.year;

  if (
    lastStudentId &&
    lastStudentSemesterCode === currentCode &&
    lastStudentSemesterYear === currentYear
  ) {
    currentId = lastStudentId?.substring(6);
    console.log(currentId, 'curentid under if');
  }

  let incrementId = (Number(currentId) + 1).toString().padStart(4, '0');
  console.log(incrementId);

  incrementId = `${payload.year}${payload.code}${incrementId}`;

  return incrementId;
};

const findLastFacultyId = async () => {
  const lastFacultyId = await User.findOne(
    {
      role: 'faculty',
    },
    {
      id: 1,
      _id: 0,
    },
  )
  .sort({createdAt: -1}).lean();

  return lastFacultyId?.id ? lastFacultyId.id.substring(2) : undefined
};

export const generatedFacultyId = async () =>{
    let currentId = (0).toString();
    const lastFacultyID = await findLastFacultyId();

    if(lastFacultyID){
        currentId = lastFacultyID.substring(2)
    }

    let incrementID = (Number(currentId) + 1).toString().padStart(4,'0')

    incrementID = `F-${incrementID}`
    
    return incrementID
}


const findLastAdminId = async () => {
    const lastFacultyId = await User.findOne(
      {
        role: 'admin',
      },
      {
        id: 1,
        _id: 0,
      },
    )
    .sort({createdAt: -1}).lean();
  
    return lastFacultyId?.id ? lastFacultyId.id.substring(2) : undefined
  };

  export const generatedAdminId = async () =>{
    let currentId = (0).toString();
    const lastFacultyID = await findLastAdminId();

    if(lastFacultyID){
        currentId = lastFacultyID.substring(2)
    }

    let incrementID = (Number(currentId) + 1).toString().padStart(4,'0')

    incrementID = `A-${incrementID}`
    
    return incrementID
}