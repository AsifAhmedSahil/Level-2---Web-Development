// import { User } from "../user/user.model";
import httpStatus from "http-status";
import AppError from "../../error/AppError";
import { User } from "../user/user.model";
import { TLoginUser } from "./auth.interface";
import bcrypt from "bcrypt"


const loginUser = async(payload:TLoginUser) =>{

    // check user is exist in database or not
    const isUserExists = await User.findOne({id: payload?.id})
    if(!isUserExists){
        throw new AppError(httpStatus.NOT_FOUND,"This user is not exist in database")
    }

    // check user is already deleted or not
    const isDeleted = isUserExists?.isDeleted
    if(isDeleted){
        throw new AppError(httpStatus.FORBIDDEN,"This user is already deleted!")
    }

    // check user is blocked or not
    const userStatus = isUserExists?.status
    if(userStatus === 'blocked'){
        throw new AppError(httpStatus.FORBIDDEN,"This user is already blocked!")
    }

    // check the password is matched or not
    const isPasswordMatched = await bcrypt.compare(payload?.password,isUserExists?.password)
    

    
    return {}

}

export const authServices = {
    loginUser
}