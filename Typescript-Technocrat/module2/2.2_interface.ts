// type alias and interface same but some different 
// type alias use for all premitive data
// interface user for only object declaration

type User1 = {
    name:string,
    age:number
}

interface User2 {
    name:string,
    age:number
}

const userInfo: User2 = {
    name:'sahil',
    age: 25
    
}

type userWithId1 = User1 & {id:number}
const userInfointer: userWithId1 = {
    name:'sahil',
    age: 25,
    id:193001912
    
}

interface userWithId2 extends User2 {
    id: 193001912
}

// declare array with type alias and interface in ts

type roll1 = number[]

const rollNumber1:roll1 = [1,2,3] 

interface roll2 {
    [index:number] : number
}

const rollNumber2: roll2 = [1,2,3]

// declare function with interface

type Add1 = (num1:number,num2:number) => number

const add1 : Add1 =(num1,num2) => (num1+num2)

interface Add2 {
    (num1:number,num2:number) : number 
}

const add2: Add2 = (num1,num2) => (num1+num2)

