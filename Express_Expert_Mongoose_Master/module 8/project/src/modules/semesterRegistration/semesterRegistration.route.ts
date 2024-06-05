import express from "express";

import validationSchema from "../../middlewares/validationSchema";
import { semesterRegistrationValidation } from "./semesterRegistration.validation";

import { semesterRegistrationControllers } from "./semesterRegistration.controller";



const router = express.Router();


router.post("/create-semester-registration",validationSchema(semesterRegistrationValidation.createSemesterRegistrationValidationSchema),semesterRegistrationControllers.createSemesterRegistration)
// router.get("/get-academic-semester",AcademicSemesterControllers.getAllAcademicSemester)
// router.get("/:semesterId",AcademicSemesterControllers.getSingleAcademicSemester)
// router.patch("/:semesterId",validationSchema(AcademicSemesterValidationSchemas.updateAcademicSemesterValidationSchema),AcademicSemesterControllers.updateSingleAcademicSemester)


export const semesterRegistrationRoute  = router;