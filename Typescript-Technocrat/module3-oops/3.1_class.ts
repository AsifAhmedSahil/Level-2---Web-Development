// class in oops

class Animal {
    // this is property of the class
    // name:string;
    // species:string;
    // sound:string;

    // parameter properties 
    // when we declare public keyword into constructor then it automatically define type =>  name :srting and also initialized the this.name into constructor***

    constructor( public name:string,public species:string,public sound:string)
    {
        //this.name = name,
        //this.species = species,
        //this.sound = sound
    }

    // when run a fuction inside the class that is called Method*******
    makeSound() {
        console.log(`the ${this.name} says ${this.sound}`)
}
}

const dog = new Animal('tommy','dog','ghew ghew');
dog.makeSound()
