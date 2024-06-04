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


export const CourseRoutes  = router;