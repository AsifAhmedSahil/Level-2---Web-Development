import express from "express";

import validationSchema from "../../middlewares/validationSchema";
import { courseValidation } from "./courses.validation";
import { courseControllers } from "./courses.controller";
import auth from "../../middlewares/auth";
import { USER_ROLE } from "../user/user.constants";



const router = express.Router();


router.post("/create-course",auth(USER_ROLE.superAdmin,USER_ROLE.admin),validationSchema(courseValidation.createCourseValidationSchema),courseControllers.createCourseController)
router.get("/",auth(USER_ROLE.superAdmin,USER_ROLE.admin,USER_ROLE.student,USER_ROLE.faculty),courseControllers.getAllCourseController)
router.get("/:courseId",auth(USER_ROLE.superAdmin,USER_ROLE.admin,USER_ROLE.student,USER_ROLE.faculty),courseControllers.getSingleCourseController)
// router.patch("/:semesterId",validationSchema(AcademicSemesterValidationSchemas.updateAcademicSemesterValidationSchema),AcademicSemesterControllers.updateSingleAcademicSemester)
router.delete("/:courseId",auth('admin'),auth(USER_ROLE.superAdmin,USER_ROLE.admin),courseControllers.deleteCourseController)
router.patch("/:courseId",auth('admin'),auth(USER_ROLE.superAdmin,USER_ROLE.admin),validationSchema(courseValidation.updateCourseValidationSchema),courseControllers.updateCourseController)
router.put("/:courseId/assign-faculty",auth(USER_ROLE.superAdmin,USER_ROLE.admin),validationSchema(courseValidation.assignFacultyValidation),courseControllers.assignFaculty)
router.get("/:courseId/get-faculty",auth(USER_ROLE.superAdmin,USER_ROLE.admin,USER_ROLE.faculty,USER_ROLE.student),courseControllers.getFacultyFromDB)


export const CourseRoutes  = router;