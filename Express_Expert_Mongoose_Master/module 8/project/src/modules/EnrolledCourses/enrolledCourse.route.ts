import express from 'express'
import validationSchema from '../../middlewares/validationSchema'
import { EnrolledCourseValidation } from './enrolledCourse.validation'
import { enrolledCoursesController } from './enrolledCourse.controller'
import auth from '../../middlewares/auth'
import { USER_ROLE } from '../user/user.constants'

const router = express.Router()
router.post("/create-enrolled-course",auth(USER_ROLE.student),validationSchema(EnrolledCourseValidation.createEnrolledCourseValidationSchema),enrolledCoursesController.createEnrolledCourse)
router.patch("/update-enrolled-course-marks",auth(USER_ROLE.faculty,USER_ROLE.superAdmin,USER_ROLE.admin),validationSchema(EnrolledCourseValidation.updateEnrolledCourseValidationSchema),enrolledCoursesController.updateEnrolledCourse)




export const  enrolledCourseRouter = router