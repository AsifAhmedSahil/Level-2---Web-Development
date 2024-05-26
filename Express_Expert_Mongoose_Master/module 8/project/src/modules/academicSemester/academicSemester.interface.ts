export type Tmonth = 
    'January'|"February"|"March"|"April"|"May"|"June"|"July"|"August"|"September"|"October"|"November"|"December"

export type TAcademicSemesterName = "Summer" | "Autumn" | "Fall"
export type TAcademicSemesterCode = "01" | "02" | "03"

export type TAcademicSemester = {
    name: TAcademicSemesterName,
    code :TAcademicSemesterCode,
    year:Date,
    startMonth: Tmonth,
    endMonth:Tmonth

}