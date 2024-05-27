import catchAsync from '../../utils/catchAsync';
import { AcademicSemesterServices } from './academicSemester.service';

const createAcademicSemesterController = catchAsync(async (req, res) => {
  const result = await AcademicSemesterServices.createAcademicSemesterIntoDB(
    req.body,
  );

  res.status(200).json({
    success: true,
    message: 'Academic semester created Successfully',
    data: result,
  });
});

const getAllAcademicSemester = catchAsync(async (req,res) =>{
  const result = await AcademicSemesterServices.getAllSemesterFromDB()
  res.status(200).json({
    success: true,
    message: 'All Academic semester Retrive Successfully',
    data: result,
  });
})

export const AcademicSemesterControllers = {
  createAcademicSemesterController,
  getAllAcademicSemester
};
