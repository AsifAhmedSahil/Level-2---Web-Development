
import express from "express";

import validationSchema from "../../middlewares/validationSchema";
import { offeredCourseValidation } from "./OfferedCourse.validation";
import { offeredCourseControllers } from "./OfferedCourse.controller";




const router = express.Router();


router.post("/create-offered-course",validationSchema(offeredCourseValidation.createOfferedCourseValidationSchema),offeredCourseControllers.createOfferedCourse)
// router.get("/",courseControllers.getAllCourseController)
// router.get("/:courseId",courseControllers.getSingleCourseController)
// // router.patch("/:semesterId",validationSchema(AcademicSemesterValidationSchemas.updateAcademicSemesterValidationSchema),AcademicSemesterControllers.updateSingleAcademicSemester)
// router.delete("/:courseId",courseControllers.deleteCourseController)
// router.put("/:courseId/assign-faculty",validationSchema(courseValidation.assignFacultyValidation),courseControllers.assignFaculty)
// router.patch("/:courseId",validationSchema(courseValidation.updateCourseValidationSchema),courseControllers.updateCourseController)


export const OfferedCoursesRoute  = router;