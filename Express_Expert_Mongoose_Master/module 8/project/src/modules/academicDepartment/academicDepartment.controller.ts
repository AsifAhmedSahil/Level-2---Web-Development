
import catchAsync from '../../utils/catchAsync';
import { AcademicDepartmentServices } from './academicDepartment.service';



const createAcademicDepartmentController = catchAsync(async (req, res) => {
  const result = await AcademicDepartmentServices.createAcademicDepartmentIntoDB(
    req.body,
  );

  res.status(200).json({
    success: true,
    message: 'Academic Department created Successfully',
    data: result,
  });
});

const getAllAcademicDepartment = catchAsync(async (req, res) => {
  const result = await AcademicDepartmentServices.getAllDepartmentsFromDB();
  res.status(200).json({
    success: true,
    message: 'All Academic Department Retrive Successfully',
    data: result,
  });
});

const getSingleAcademicDepartment = catchAsync(async (req, res) => {
  const { facultyId } = req.params;

  const result =
    await AcademicDepartmentServices.getSingleDepartmentFromDB(facultyId);

  res.status(200).json({
    success: true,
    message: 'Academic Department Retrive Successfully!',
    data: result,
  });
});

const updateSingleAcademicDepartment = catchAsync(async (req, res) => {
  const {  departmentId } = req.params;

  const result =
    await AcademicDepartmentServices.updateAcademicDepartmentIntoDB(departmentId,req.body);

    console.log(result,"update")

  res.status(200).json({
    success: true,
    message: 'Academic Department Updated Successfully',
    data: result,
  });
});

export const AcademicDepartmentControllers = {
    createAcademicDepartmentController,
    getAllAcademicDepartment,
    getSingleAcademicDepartment,
   updateSingleAcademicDepartment
};
