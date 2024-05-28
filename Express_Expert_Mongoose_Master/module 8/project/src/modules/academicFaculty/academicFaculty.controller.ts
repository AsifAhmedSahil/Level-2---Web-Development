import catchAsync from '../../utils/catchAsync';
import { AcademicFacultyServices } from './academicFaculty.service';


const createAcademicFacultyController = catchAsync(async (req, res) => {
  const result = await AcademicFacultyServices.createAcademicFacultyIntoDB(
    req.body,
  );

  res.status(200).json({
    success: true,
    message: 'Academic Faculty created Successfully',
    data: result,
  });
});

const getAllAcademicFaculty = catchAsync(async (req, res) => {
  const result = await AcademicFacultyServices.getAllFacultiesFromDB();
  res.status(200).json({
    success: true,
    message: 'All Academic Faculty Retrive Successfully',
    data: result,
  });
});

const getSingleAcademicFaculty = catchAsync(async (req, res) => {
  const { facultyId } = req.params;

  const result =
    await AcademicFacultyServices.getSingleFacultyFromDB(facultyId);

  res.status(200).json({
    success: true,
    message: 'Academic Faculty Retrive Successfully!',
    data: result,
  });
});

const updateSingleAcademicFaculty = catchAsync(async (req, res) => {
  const { facultyId } = req.params;

  const result =
    await AcademicFacultyServices.updateAcademicFacultyIntoDB(facultyId,req.body);

    console.log(result,"update")

  res.status(200).json({
    success: true,
    message: 'Academic Faculty Updated Successfully',
    data: result,
  });
});

export const AcademicFacultyControllers = {
   createAcademicFacultyController,
   getAllAcademicFaculty,
   getSingleAcademicFaculty,
  updateSingleAcademicFaculty
};
