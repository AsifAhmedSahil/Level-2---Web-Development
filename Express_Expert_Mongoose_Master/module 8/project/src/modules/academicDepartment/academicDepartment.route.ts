import express from "express";

import validationSchema from "../../middlewares/validationSchema";
import { AcademicDepartmentControllers } from "./academicDepartment.controller";
import { AcademicDepertmentValidation } from "./academicDepartment.validation";




const router = express.Router();


router.post("/create-academic-department",validationSchema(AcademicDepertmentValidation.createAcademicDepartmentValidationSchema),AcademicDepartmentControllers.createAcademicDepartmentController)
router.get("/get-academic-department",AcademicDepartmentControllers.getAllAcademicDepartment)
router.get("/:departmentId",AcademicDepartmentControllers.getSingleAcademicDepartment)
router.patch("/:departmentId",validationSchema(AcademicDepertmentValidation.updateAcademicDepartmentValidationSchema),AcademicDepartmentControllers.updateSingleAcademicDepartment)



export const AcademicDepartmentRoutes  = router;