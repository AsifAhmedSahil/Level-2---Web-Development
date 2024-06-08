// import { User } from "../user/user.model";
import { TLoginUser } from "./auth.interface";


const loginUser = async(payload:TLoginUser) =>{

    console.log(payload)
    return {}

}

export const authServices = {
    loginUser
}