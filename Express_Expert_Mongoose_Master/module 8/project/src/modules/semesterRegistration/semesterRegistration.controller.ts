import catchAsync from "../../utils/catchAsync";
import { semesterRegistrationServices } from "./semesterRegistration.service";


const createSemesterRegistration = catchAsync(async (req, res) => {
    const result = await semesterRegistrationServices.createSemesterRegistrationIntoDB(
      req.body
    );
  
    res.status(200).json({
      success: true,
      message: 'Semester Registration Created Successfully',
      data: result,
    });
  });
const getAllSemesterRegistration = catchAsync(async (req, res) => {
    const result = await semesterRegistrationServices.getSemesterRegistrationFromDB(
      req.query
    );
  
    res.status(200).json({
      success: true,
      message: 'Registered All Semester retrive Successfully',
      data: result,
    });
  });
const getSingleSemesterRegistration = catchAsync(async (req, res) => {
    const {id} = req.params
    const result = await semesterRegistrationServices.getSingleSemesterRegistrationFromDB(
      id
    );
  
    res.status(200).json({
      success: true,
      message: 'Registered Semester retrive Successfully',
      data: result,
    });
  });

export const semesterRegistrationControllers = {
    createSemesterRegistration,
    getAllSemesterRegistration,
    getSingleSemesterRegistration
}