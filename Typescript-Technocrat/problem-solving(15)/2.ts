// 2. Define an interface called Person that has the following properties: name (string), age (number), and email (string). Create an object based on this interface and print out its properties.

interface Person{
    name:string;
    age:number;
    email:string;
}

const person : Person = {
    name:"sahil",
    age: 25,
    email: "sahil"
}

console.log(person.name)