// import express, { NextFunction, Request, Response } from 'express';
import express from 'express';
import { userControllers } from './user.controller';

import { studentValidations } from '../student/student.validaion';
import validationSchema from '../../middlewares/validationSchema';
import { FacultyValidations } from '../faculty/faculty.validation';
import { AdminValidations } from '../admin/admin.validation';
import { USER_ROLE } from './user.constants';
import auth from '../../middlewares/auth';
import { userValidation } from './user.validation';
// import { upload } from '../../utils/sendImageToCloudinary';



const router = express.Router();



// will call controller function
router.post(
  '/create-faculty',
  // auth(USER_ROLE.admin),
  validationSchema(FacultyValidations.createFacultyValidationSchema),
  userControllers.createFaculty,
);
router.post(
  '/create-student',
  auth(USER_ROLE.superAdmin),
  // upload.single('file'),
  // (req:Request,res:Response,next:NextFunction) =>{
  //   req.body = JSON.parse(req.body.data)
  //   next()
  // },
  validationSchema(studentValidations.createStudentValidationSchema),
  userControllers.createStudent,
);
router.post(
  '/create-admin',
  validationSchema(AdminValidations.createAdminValidationSchema),
  userControllers.createAdmin,
);
router.post(
  '/change-status/:id',
  auth('admin'),
  validationSchema(userValidation.changeStatusValidation),
  userControllers.changeStatus,
);
router.get(
  '/me',auth('student','faculty','admin'),
  validationSchema(AdminValidations.createAdminValidationSchema),
  userControllers.getMe,
);

export const userRoute = router;
