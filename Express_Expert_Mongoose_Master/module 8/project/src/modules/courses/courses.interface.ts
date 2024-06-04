import { Types } from "mongoose";

export type TPreReqsiteCourses ={
    course : Types.ObjectId;
    isDeleted: boolean
}

export type TCourse = {
    title: string;
    prefix:string;
    code:number;
    credits: number;
    preReqsiteCourses : [TPreReqsiteCourses] 

}