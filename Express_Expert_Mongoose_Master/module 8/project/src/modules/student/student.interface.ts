// import { Schema, model, connect } from 'mongoose';

import { Model, Types } from "mongoose";

// 1. Create an interface representing a document in MongoDB.

export type TGuirdian ={
  fatherName:string,
  fatherOccupation:string,
  fatherNo:string,
  motherName:string,
  motherOccupation:string,
  motherNo:string,
}

export type TuserName = {
    
  firstName: string;
  middleName?: string;
  lastName: string;
}

export type TLocalGuirdian = {
  name: string;
  address: string;
  contact:string;

}

export type TStudent = {
  id:string,
  user: Types.ObjectId
  password:string,
  name: TuserName;
  gender:'male' | 'female'| 'others',
  contact: string,
  emergenceContactNo: string,
  dateOfBirth?: Date,
  email: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-',
  presentAddress: string,
  permanentAddress: string,

  guirdian: TGuirdian,
  localGuirdian: TLocalGuirdian,
  photoUrl?: string,
  
  isDeleted: boolean

};

// custom instance method for check user exist in database or not -- check using id
export type StudentMethod = {
  // eslint-disable-next-line no-unused-vars
  isUserExist(id: string) : Promise<TStudent | null>;
}

export type studentModel = Model<TStudent, Record<string, never> , StudentMethod>
