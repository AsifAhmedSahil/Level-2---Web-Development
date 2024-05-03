// constraint means j type disi aita declare kore deya ki dilam extends use kore***
export{}
const addCourseStudent = <T extends {name:string;gmail:string}>(student: T) =>{
    const course = 'next level web dev'
    return {
        ...student,
         course
    }
}


const stu1 = addCourseStudent({
    name:'sahil',
    gmail:'asif@gmail.com',
    devtype:'newbe'
})
const stu2 = addCourseStudent({
    name:'sahil',
    gmail:'asif@gmail.com',
    hasWatch:'Apple Watch'
})