import { Schema,  model } from 'mongoose';
import { TAcademicDepartment } from './academicDepartment.interface';
import AppError from '../../error/AppError';


const academicDepartment = new Schema<TAcademicDepartment>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    academicFaculty: {
      type: Schema.Types.ObjectId,
      ref: "AcademicFaculty"
      
    },
  },
  { timestamps: true },
);


academicDepartment.pre("findOneAndUpdate" , async function(){
  const query = this.getQuery()
  console.log(query)
  const isDepartmentExist = await AcademicDepartment.findOne(query)
  if(!isDepartmentExist){
    throw new AppError(404,"Department does not exist")
  }
})

export const AcademicDepartment = model<TAcademicDepartment>(
  'AcademicDepartment',
  academicDepartment,
);
