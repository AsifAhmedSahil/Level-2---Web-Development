// generic types 

type GenericType<T> = Array<T>

const rollNumbers : GenericType<number> = [1,2,5,7]

const nameList: GenericType<string> = ['sahil','asif']

const booleanData : GenericType<boolean> = [true,false]

// array of object use of generics

const users : GenericType<{name:string,age:number}>= [
    {
        name:'sahil',
        age:24
    },
    {
        name:'asif',
        age:24
    },
]

// use generics for tuple

type GenericsTuple<X,Y> = [X,Y]
const mySelf :GenericsTuple<string,string> = ['sahil','asif']

const mixTuple : GenericsTuple<number,{name:string,age:number}> = [125,{name:'sahil',age:23}]
