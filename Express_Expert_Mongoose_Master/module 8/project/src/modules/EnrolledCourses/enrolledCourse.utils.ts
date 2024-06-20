export const calculateGradeAndGradePoint = (totalMarks:number) =>{
    let result = {
        grade: 'NA',
        gradepoints: 0
    }

    if(totalMarks >=0 && totalMarks <= 19){
        result = {
            grade: 'F',
            gradepoints:0.00
        }
    }else if(totalMarks >=20 && totalMarks <= 39){
        result = {
            grade: 'D',
            gradepoints:2.00
        }
    }else if(totalMarks >=40 && totalMarks <= 59){
        result = {
            grade: 'C',
            gradepoints:3.00
        }
    }else if(totalMarks >=60 && totalMarks <= 79){
        result = {
            grade: 'B',
            gradepoints:3.50
        }
    }else if(totalMarks >=80 && totalMarks <= 100){
        result = {
            grade: 'A',
            gradepoints: 4.00
        }
    }else{
        result = {
            grade: 'NA',
            gradepoints: 0
        }
    }
    return result
    

}