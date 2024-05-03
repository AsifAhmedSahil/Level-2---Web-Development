// function with generics***********

const createArray = (params: string) : string[] =>{
    return [params]
}

const createArrayWithGenerics = <T>(params: T) : T[] =>{
    return [params]
}


const res1 = createArray('sahil')
const resGeneric1 = createArrayWithGenerics<boolean>(true)
const resGeneric2 = createArrayWithGenerics<number>(1)
const resGeneric3 = createArrayWithGenerics<string>('sahil')

type Obj = {id:number,name:string}
const resGenericObj = createArrayWithGenerics<Obj>({id:125,name:'sahil'})


const createArrayWithTuple = <T,Q>(params1: T,params2: Q) : [T,Q] =>{
    return [params1,params2]
}


const res2 = createArrayWithTuple<string,string>('sahil',"asif")
const resGeneric10 = createArrayWithTuple<string,number>('sahil',125)

const addCourseStudent = <T>(student: T) =>{
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
