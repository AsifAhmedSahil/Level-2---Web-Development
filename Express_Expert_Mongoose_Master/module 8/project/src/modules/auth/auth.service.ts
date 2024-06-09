// import { User } from "../user/user.model";
import httpStatus from "http-status";
import AppError from "../../error/AppError";
import { User } from "../user/user.model";
import { TLoginUser } from "./auth.interface";



const loginUser = async(payload:TLoginUser) =>{

    // check user is exist in database or not

    const user = await User.isUserExistsByCustomId(payload.id)
   
    if(!user){
        throw new AppError(httpStatus.NOT_FOUND,"This user is not exist in database")
    }

    // check user is already deleted or not
    // const isDeleted = isUserExists?.isDeleted
    // if(isDeleted){
    //     throw new AppError(httpStatus.FORBIDDEN,"This user is already deleted!")
    // }

    // check user is blocked or not
    // const userStatus = isUserExists?.status
    // if(userStatus === 'blocked'){
    //     throw new AppError(httpStatus.FORBIDDEN,"This user is already blocked!")
    // }

    // check the password is matched or not
    if(!(await User.isPasswordMatched(payload?.password,user?.password))){
        throw new AppError(httpStatus.FORBIDDEN,"Password do not matched")
    }

    

    
    return {}

}

export const authServices = {
    loginUser
}