import express from 'express';
import { userControllers } from './user.controller';

import { studentValidations } from '../student/student.validaion';
import validationSchema from '../../middlewares/validationSchema';
import { FacultyValidations } from '../faculty/faculty.validation';
import { AdminValidations } from '../admin/admin.validation';

const router = express.Router();



// will call controller function
router.post(
  '/create-faculty',
  validationSchema(FacultyValidations.createFacultyValidationSchema),
  userControllers.createFaculty,
);
router.post(
  '/create-student',
  validationSchema(studentValidations.createStudentValidationSchema),
  userControllers.createStudent,
);
router.post(
  '/create-admin',
  validationSchema(AdminValidations.createAdminValidationSchema),
  userControllers.createAdmin,
);

export const userRoute = router;
