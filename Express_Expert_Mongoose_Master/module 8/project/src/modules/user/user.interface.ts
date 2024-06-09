/* eslint-disable no-unused-vars */
import { Model } from "mongoose";

export interface TUser  {
    id:string;
    password: string;
    needPasswordChange: boolean;
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
}
