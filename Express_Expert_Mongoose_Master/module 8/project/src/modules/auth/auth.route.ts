

import  express  from "express"
import { authController } from "./auth.controller"
import { AuthValidation } from "./auth.validation"
import validationSchema from "../../middlewares/validationSchema"
import auth from "../../middlewares/auth"
import { USER_ROLE } from "../user/user.constants"


const router = express.Router()

router.post("/login",validationSchema(AuthValidation.LoginValidationSchema),authController.loginUser)
router.post("/change-password",auth(USER_ROLE.admin,USER_ROLE.faculty,USER_ROLE.student),validationSchema(AuthValidation.changePasswordValidationSchema),authController.changePassword)



export const AuthRoute = router