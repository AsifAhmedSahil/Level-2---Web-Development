"use strict";
// inheritence -- OOP
// common Class
class Person {
    constructor(name, age, address) {
        this.name = name,
            this.age = age,
            this.address = address;
    }
    getSleep(numberOfHours) {
        console.log(`${this.name} will sleep for ${numberOfHours} Hours`);
    }
}
class Student extends Person {
    constructor(name, age, address) {
        super(name, age, address);
    }
}
const student1 = new Student('sahil', 20, 'ctg');
class Teacher extends Person {
    constructor(name, age, address, designation) {
        super(name, age, address);
        this.designation = designation;
    }
    getClass(numberOfClass) {
        console.log(`${this.name} will take ${numberOfClass} class`);
    }
}
const teacher = new Teacher('Asif', 30, 'ctg', 'profesor');
