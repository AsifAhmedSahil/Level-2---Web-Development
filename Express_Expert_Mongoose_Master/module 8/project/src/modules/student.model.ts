import { Schema, model, connect } from 'mongoose';
import { Student } from './student/student.interface';

const userSchema = new Schema<Student>({
    id:{type: String},
    name:{
        firstName:{
            type:String,
            required:true
        },
        middleName:{
            type:String,
            required:true
        },
        lastNameName:{
            type:String,
            required:true
        },
    },
    gender: ["male",'female'],
    dateOfBirth:String,
    email: {
        type:String,
        required:true
    },
    contact: {
        type:String,
        required:true
    },
    emergenceContactNo: {
        type:String,
        required:true
    },
    bloodGroup:['A+' , 'A-' , 'B+' , 'B-' , 'AB+' , 'AB-'],
    presentAddress: {
        type:String,
        required:true
    },
    permanentAddress: {
        type:String,
        required:true
    },
    guirdian:{
        fatherName:{
            type:String,
            required:true
        },
        fatherOccupation:{
            type:String,
            required:true
        },
        fatherNo:{
            type:String,
            required:true
        },
        motherName:{
            type:String,
            required:true
        },
        motherNo:{
            type:String,
            required:true
        },
        motherOccupation:{
            type:String,
            required:true
        },
    },
    localGuirdian:{
        name:{
            type:String
        },
        address:{
            type:String
        },
        contact:{
            type:String
        },
    },
    photoUrl: {type:String},
    isActive:['active','blocked']

})