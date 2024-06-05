import express from "express";

import validationSchema from "../../middlewares/validationSchema";
import { courseValidation } from "./courses.validation";
import { courseControllers } from "./courses.controller";



const router = express.Router();


router.post("/create-course",validationSchema(courseValidation.createCourseValidationSchema),courseControllers.createCourseController)
router.get("/",courseControllers.getAllCourseController)
router.get("/:courseId",courseControllers.getSingleCourseController)
// router.patch("/:semesterId",validationSchema(AcademicSemesterValidationSchemas.updateAcademicSemesterValidationSchema),AcademicSemesterControllers.updateSingleAcademicSemester)
router.delete("/:courseId",courseControllers.deleteCourseController)
router.put("/:courseId/assign-faculty",validationSchema(courseValidation.assignFacultyValidation),courseControllers.assignFaculty)
router.patch("/:courseId",validationSchema(courseValidation.updateCourseValidationSchema),courseControllers.updateCourseController)


export const CourseRoutes  = router;