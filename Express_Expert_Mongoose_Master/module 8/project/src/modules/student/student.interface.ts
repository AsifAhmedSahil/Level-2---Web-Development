// import { Schema, model, connect } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.

export type Guirdian ={
  fatherName:string,
  fatherOccupation:string,
  fatherNo:string,
  motherName:string,
  motherOccupation:string,
  motherNo:string,
}

export type userName = {
    
  firstName: string;
  middleName: string;
  lastName: string;
}

export type LocalGuirdian = {
  name: string;
  address: string;
  contact:string;

}

export type Student = {
  id:string,
  name: userName;
  gender:'male' | 'female',
  contact: string,
  emergenceContactNo: string,
  dateOfBirth?: string,
  email: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-',
  presentAddress: string,
  permanentAddress: string,

  guirdian: Guirdian,
  localGuirdian: LocalGuirdian,
  photoUrl?: string,
  isActive: 'active' | 'blocked',

};