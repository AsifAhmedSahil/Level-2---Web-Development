
import express from "express";

import validationSchema from "../../middlewares/validationSchema";
import { offeredCourseValidation } from "./OfferedCourse.validation";
import { offeredCourseControllers } from "./OfferedCourse.controller";
import auth from "../../middlewares/auth";
import { USER_ROLE } from "../user/user.constants";




const router = express.Router();


router.post("/create-offered-course",auth(USER_ROLE.superAdmin,USER_ROLE.admin,USER_ROLE.faculty),validationSchema(offeredCourseValidation.createOfferedCourseValidationSchema),offeredCourseControllers.createOfferedCourse)

router.get("/",auth(USER_ROLE.superAdmin,USER_ROLE.admin,USER_ROLE.faculty),offeredCourseControllers.getAllOfferedCourse)

router.get("/my-offered-courses",auth(USER_ROLE.student),offeredCourseControllers.getMyOfferedCourse)

router.get("/:courseId",auth(USER_ROLE.superAdmin,USER_ROLE.admin,USER_ROLE.faculty,USER_ROLE.student),offeredCourseControllers.getSingleOfferedCourse)

// // router.patch("/:semesterId",validationSchema(AcademicSemesterValidationSchemas.updateAcademicSemesterValidationSchema),AcademicSemesterControllers.updateSingleAcademicSemester)
// router.delete("/:courseId",courseControllers.deleteCourseController)
// router.put("/:courseId/assign-faculty",validationSchema(courseValidation.assignFacultyValidation),courseControllers.assignFaculty)
// router.patch("/:courseId",validationSchema(courseValidation.updateCourseValidationSchema),courseControllers.updateCourseController)


export const OfferedCoursesRoute  = router;