import express from 'express'
import validationSchema from '../../middlewares/validationSchema'
import { EnrolledCourseValidation } from './enrolledCourse.validation'
import { enrolledCoursesController } from './enrolledCourse.controller'

const router = express.Router()
router.post("/create-enrolled-course",validationSchema(EnrolledCourseValidation.createEnrolledCourseValidationSchema),enrolledCoursesController.createEnrolledCourse)




export const  enrolledCourseRouter = router