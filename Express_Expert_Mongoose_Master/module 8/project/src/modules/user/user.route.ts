import express from 'express';
import { userControllers } from './user.controller';

import { studentValidations } from '../student/student.validaion';
import validationSchema from '../../middlewares/validationSchema';
import { FacultyValidations } from '../faculty/faculty.validation';
import { AdminValidations } from '../admin/admin.validation';
import { USER_ROLE } from './user.constants';
import auth from '../../middlewares/auth';

const router = express.Router();



// will call controller function
router.post(
  '/create-faculty',
  auth(USER_ROLE.admin),
  validationSchema(FacultyValidations.createFacultyValidationSchema),
  userControllers.createFaculty,
);
router.post(
  '/create-student',
  auth(USER_ROLE.admin),
  validationSchema(studentValidations.createStudentValidationSchema),
  userControllers.createStudent,
);
router.post(
  '/create-admin',
  validationSchema(AdminValidations.createAdminValidationSchema),
  userControllers.createAdmin,
);

export const userRoute = router;
