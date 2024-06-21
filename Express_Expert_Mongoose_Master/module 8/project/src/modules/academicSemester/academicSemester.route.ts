import express from "express";
import { AcademicSemesterControllers } from "./academicSemester.controller";
import validationSchema from "../../middlewares/validationSchema";
import  { AcademicSemesterValidationSchemas } from "./academicSemesterValidation";
import auth from "../../middlewares/auth";
import { USER_ROLE } from "../user/user.constants";


const router = express.Router();


router.post("/create-academic-semester",auth(USER_ROLE.superAdmin,USER_ROLE.admin),validationSchema(AcademicSemesterValidationSchemas.createAcademicSemesterValidationSchema),AcademicSemesterControllers.createAcademicSemesterController)
router.get("/get-academic-semester",AcademicSemesterControllers.getAllAcademicSemester)
router.get("/:semesterId",AcademicSemesterControllers.getSingleAcademicSemester)
router.patch("/:semesterId",validationSchema(AcademicSemesterValidationSchemas.updateAcademicSemesterValidationSchema),AcademicSemesterControllers.updateSingleAcademicSemester)


export const AcademicSemesterRoutes  = router;