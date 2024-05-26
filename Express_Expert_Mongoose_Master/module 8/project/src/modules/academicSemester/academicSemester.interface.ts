type Tmonth = 
    'January'|"February"|"March"|"April"|"May"|"June"|"July"|"August"|"September"|"October"|"November"|"December"

export type TAcademicSemester = {
    name: "Summer" | "Autumn" | "Fall",
    code :"01"| " 02" |"03",
    year:Date,
    startMonth: Tmonth,
    endMonth:Tmonth

}