import { Types } from "mongoose";

export type TGrade = 'A' | 'B' | 'C' | 'D' |'E' |'F'| 'NA'

export type TCoursesMarks = {
    classTest1: number;
    midTerm: number;
    classTest2: number;
    finalTerm: number;
}


export type TEnrolledCourses = {
    semesterRegistration: Types.ObjectId;
    academicSemester:Types.ObjectId;
    academicDepartment:Types.ObjectId;
    academicFaculty:Types.ObjectId;
    offeredCourse:Types.ObjectId;
    course:Types.ObjectId;
    student:Types.ObjectId;
    faculty:Types.ObjectId;
    isEnrolled: boolean;
    courseMarks: TCoursesMarks;
    grade:TGrade;
    gradePoints: number;
    isCompleted:boolean;
}

