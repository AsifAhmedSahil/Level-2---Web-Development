import express from "express";

import validationSchema from "../../middlewares/validationSchema";
import { AcademicFacultyValidation } from "./academicFaculty.validation";
import { AcademicFacultyControllers } from "./academicFaculty.controller";



const router = express.Router();


router.post("/create-academic-faculty",validationSchema(AcademicFacultyValidation.createAcademicFacultyValidationSchema),AcademicFacultyControllers.createAcademicFacultyController)
router.get("/get-academic-faculty",AcademicFacultyControllers.getAllAcademicFaculty)
router.get("/:facultyId",AcademicFacultyControllers.getSingleAcademicFaculty)
router.patch("/:facultyId",validationSchema(AcademicFacultyValidation.updateAcademicFacultyValidationSchema),AcademicFacultyControllers.updateSingleAcademicFaculty)

// will call controller function


// router.get('/',studentController.getAllStudents)
// router.get('/:studentId',studentController.getSingleStudent)
// router.delete('/:studentId',studentController.deleteSingleStudent)

export const AcademicFacultyRoutes  = router;