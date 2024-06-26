import { TAcademicSemesterCode, TAcademicSemesterName, TAcademicSemesterNameCodeMapper, Tmonth } from "./academicSemester.interface"

export const Months:Tmonth[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
export const AcademicSemesterName:TAcademicSemesterName[] = ["Summer", "Autumn", "Fall" ]
export const AcademicSemesterCode:TAcademicSemesterCode[] = ["01", "02", "03" ]

export const academicSemesterNameCodeMapper :TAcademicSemesterNameCodeMapper = {
    Autumn: "01",
    Summer:"02",
    Fall:"03"
}