
import { UserServices } from "./user.service";
import catchAsync from "../../utils/catchAsync";


const createStudent  = catchAsync(async (req,res) => {
    
  const {password, student:studentData} = req.body;
  // using zod validation
//   const zodParsedData = studentValidationSchema.parse(studentData)

  const result = await UserServices.createStudentIntoDB(password,studentData);

  res.status(200).json({
    success: true,
    message: 'Student Create Successfully',
    data: result,
  });

}
)

  export const userControllers = {
    createStudent
  }

