// Type Alias ==> means declare type one time and sue it in multiple objects

type Student = {
    name:string;
    age:number;
    contactNo:string;
    address: string;
    maritalStatus: boolean
}

const student1 : Student ={
    name: "sahil",
    age: 20,
    contactNo:"01781548",
    address:"ctg",
    maritalStatus:true

}
const student2 : Student ={
    name: "sahil",
    age: 20,
    contactNo:"01781548",
    address:"ctg",
    maritalStatus:true

}

// type alias for function

type Add = (num1:number,num2:number) => number;

const add: Add = (num1,num2) => num1+num2