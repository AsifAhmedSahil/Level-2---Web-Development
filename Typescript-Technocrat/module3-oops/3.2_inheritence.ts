// inheritence -- OOP

// common Class

class Person{
    name:string;
    age:number;
    address: string;

    constructor(name:string,age:number,address:string){
        this.name = name,
        this.age = age,
        this.address = address
    }

    getSleep(numberOfHours:number){
        console.log(`${this.name} will sleep for ${numberOfHours} Hours`)

    }
}

class Student extends Person{
    constructor(name:string,age:number,address:string){
        super(name,age,address)
    }
}

const student1 = new Student('sahil',20,'ctg')


class Teacher extends Person {
    
    designation:string

    constructor(name:string,age:number,address:string,designation:string){
        super(name,age,address)
        this.designation = designation
    }

    getClass(numberOfClass:number){
        console.log(`${this.name} will take ${numberOfClass} class`)

    }
}

const teacher = new Teacher('Asif',30,'ctg','profesor')