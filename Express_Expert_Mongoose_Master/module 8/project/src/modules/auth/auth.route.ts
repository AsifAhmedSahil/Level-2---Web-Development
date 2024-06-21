

import  express  from "express"
import { authController } from "./auth.controller"
import { AuthValidation } from "./auth.validation"
import validationSchema from "../../middlewares/validationSchema"
import auth from "../../middlewares/auth"
import { USER_ROLE } from "../user/user.constants"


const router = express.Router()

router.post("/login",validationSchema(AuthValidation.LoginValidationSchema),authController.loginUser)
router.post("/change-password",auth(USER_ROLE.admin,USER_ROLE.faculty,USER_ROLE.student,USER_ROLE.superAdmin),validationSchema(AuthValidation.changePasswordValidationSchema),authController.changePassword)
router.post("/refresh-token",validationSchema(AuthValidation.refreshTokenValidation),authController.refreshToken)
router.post("/forget-password",validationSchema(AuthValidation.forgetPasswordValidation),authController.forgetPassword)
router.post("/reset-password",validationSchema(AuthValidation.resetPasswordValidation),authController.resetPassword)



export const AuthRoute = router