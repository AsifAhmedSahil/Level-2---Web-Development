import { Schema, model, connect } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.

export type Guirdian ={
  fatherName:string,
  fatherOccupation:string,
  fatherNo:string,
  motherName:string,
  motherOccupation:string,
  motherNo:string,
}

export type student = {
  id:string,
  name: {
    
    firstName: string;
    middleName: string;
    lastName: string;
  };
  gender:'male' | 'female',
  contact: string,
  emergenceContactNo: string,
  dateOfBirth: string,
  email: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-',
  presentAddress: string,
  permanentAddress: string,

  guirdian: Guirdian
  
};
