/* eslint-disable no-unused-vars */
import { Model } from "mongoose";
import { USER_ROLE } from "./user.constants";

export interface TUser  {
    id:string;
    password: string;
    needPasswordChange: boolean;
    passwordChangeAt:Date;
    status:'in-progress' | 'blocked';
    role: 'admin'|'faculty'|'student';
    isDeleted: boolean
}


export interface UserModel extends Model<TUser>{
    // myStaticMethod() : number;
    isUserExistsByCustomId(id: string): Promise<TUser>;
  //instance methods for checking if passwords are matched
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean>;

  idJwtIssuedBeforePasswordChanged(passwordChangeTimeStamp:Date,jwtIssuedTimeStamp: number):boolean


}



export type TUserRole = keyof typeof USER_ROLE;