import catchAsync from '../../utils/catchAsync';
import { offeredCourseServices } from './OfferedCourse.service';

const createOfferedCourse = catchAsync(async (req, res) => {
  const result = await offeredCourseServices.createOfferedCourseIntoDB(
    req.body,
  );
  res.status(200).send({
    success: true,
    message: 'Offered Course is Created Successfully',
    data: result,
  });
});

const getAllOfferedCourse = catchAsync(async(req,res) =>{
  const result = await offeredCourseServices.getOfferedCourse()

  res.status(200).send({
    success: true,
    message: 'Offered Course retrived Successfully',
    data: result,
  });
})

const getSingleOfferedCourse = catchAsync(async(req,res) =>{
  const {courseId} = req.params
  // console.log(courseId)
  const result = await offeredCourseServices.getSingleOfferedCourse(courseId)

  res.status(200).send({
    success: true,
    message: 'Offered Course retrived Successfully',
    data: result,
  });
})

const getMyOfferedCourse = catchAsync(async(req,res) =>{
  const userId = req.user.userId
  // console.log(req.user)
  const result = await offeredCourseServices.getMyOfferedCourse(userId)

  res.status(200).send({
    success: true,
    message: 'Offered Course retrived Successfully',
    data: result,
  });
})



export const offeredCourseControllers = {
  createOfferedCourse,
  getAllOfferedCourse,
  getSingleOfferedCourse,
  getMyOfferedCourse
};
