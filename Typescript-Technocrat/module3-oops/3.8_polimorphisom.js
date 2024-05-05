"use strict";
// polimorphisom ==> same function different type output dei based on parameter***
class Person {
    getSleep() {
        console.log('i am sleeping 8 hours per day');
    }
}
class Student extends Person {
    getSleep() {
        console.log('i am sleeping 7 hours per day');
    }
}
class Developer extends Person {
    getSleep() {
        console.log('i am sleeping 6 hours per day');
    }
}
const getSleepHours = (param) => {
    param.getSleep();
};
// create instance 
const person = new Person();
const student = new Student();
const developer = new Developer();
// call with polimorphisom
getSleepHours(person);
getSleepHours(student);
getSleepHours(developer);
