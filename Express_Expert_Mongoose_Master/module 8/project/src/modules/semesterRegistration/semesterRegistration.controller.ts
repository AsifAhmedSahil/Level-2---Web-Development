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

export const semesterRegistrationControllers = {
    createSemesterRegistration
}