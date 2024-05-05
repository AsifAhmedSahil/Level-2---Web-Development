"use strict";
// instanceOf guard
class Animal {
    constructor(name, species) {
        this.name = name,
            this.species = species;
    }
    getSound() {
        console.log("i am making sound");
    }
}
class Dog extends Animal {
    constructor(name, species) {
        super(name, species);
    }
    makeBark() {
        console.log('i am barking');
    }
}
class Cat extends Animal {
    constructor(name, species) {
        super(name, species);
    }
    makeMeaw() {
        console.log('i am meawing');
    }
}
const isDog = (animal) => {
    return animal instanceof Dog;
};
const isCat = (animal) => {
    return animal instanceof Dog;
};
const getAnimal = (animal) => {
    if (isDog(animal)) {
        animal.makeBark();
    }
    else if (isCat(animal)) {
        animal.makeMeaw();
    }
    else {
        animal.getSound();
    }
};
const dog = new Dog('dog bhai', 'dog');
const res1 = getAnimal(dog);
