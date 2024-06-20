import express from 'express'
import validationSchema from '../../middlewares/validationSchema'
import { EnrolledCourseValidation } from './enrolledCourse.validation'
import { enrolledCoursesController } from './enrolledCourse.controller'
import auth from '../../middlewares/auth'

const router = express.Router()
router.post("/create-enrolled-course",auth('student'),validationSchema(EnrolledCourseValidation.createEnrolledCourseValidationSchema),enrolledCoursesController.createEnrolledCourse)
router.patch("/update-enrolled-course-marks",auth('faculty'),validationSchema(EnrolledCourseValidation.updateEnrolledCourseValidationSchema),enrolledCoursesController.updateEnrolledCourse)




export const  enrolledCourseRouter = router