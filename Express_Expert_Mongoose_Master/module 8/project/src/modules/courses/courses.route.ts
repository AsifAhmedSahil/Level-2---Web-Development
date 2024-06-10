import express from "express";

import validationSchema from "../../middlewares/validationSchema";
import { courseValidation } from "./courses.validation";
import { courseControllers } from "./courses.controller";
import auth from "../../middlewares/auth";



const router = express.Router();


router.post("/create-course",auth('admin'),validationSchema(courseValidation.createCourseValidationSchema),courseControllers.createCourseController)
router.get("/",auth('admin','faculty','student'),courseControllers.getAllCourseController)
router.get("/:courseId",courseControllers.getSingleCourseController)
// router.patch("/:semesterId",validationSchema(AcademicSemesterValidationSchemas.updateAcademicSemesterValidationSchema),AcademicSemesterControllers.updateSingleAcademicSemester)
router.delete("/:courseId",auth('admin'),courseControllers.deleteCourseController)
router.put("/:courseId/assign-faculty",validationSchema(courseValidation.assignFacultyValidation),courseControllers.assignFaculty)
router.patch("/:courseId",auth('admin'),validationSchema(courseValidation.updateCourseValidationSchema),courseControllers.updateCourseController)


export const CourseRoutes  = router;