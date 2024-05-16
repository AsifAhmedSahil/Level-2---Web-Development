import { Schema, model,  } from 'mongoose';
import { Guirdian, LocalGuirdian, Student, userName } from './student/student.interface';


const userNameSchema = new Schema<userName>({
    
        firstName:{
            type:String,
            required:true
        },
        middleName:{
            type:String,
            required:true
        },
        lastName:{
            type:String,
            required:true
        },
    
})

const guirdianSchema = new Schema<Guirdian>(
    {
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
    }
)
const localGuirdianSchema = new Schema<LocalGuirdian>(
    {
        name:{
            type:String
        },
        address:{
            type:String
        },
        contact:{
            type:String
        },
    }
)

const studentSchema = new Schema<Student>({
    id:{type: String},
    name:userNameSchema,
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
    guirdian:guirdianSchema,
    localGuirdian: localGuirdianSchema,
    photoUrl: {type:String},
    isActive:['active','blocked']

})

// create a model for schema

export const StudentModel = model<Student>('Student',studentSchema)