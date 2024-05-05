// instanceOf guard

class Animal {
    name:string;
    species:string

    constructor(name:string,species:string){
        this.name = name,
        this.species = species
    }

    getSound(){
        console.log("i am making sound")
    }

}

class Dog extends Animal {
    constructor(name:string,species:string){
        super(name,species)
    }

    makeBark(){
        console.log('i am barking')
    }
}
class Cat extends Animal {
    constructor(name:string,species:string){
        super(name,species)
    }

    makeMeaw(){
        console.log('i am meawing')
    }
}

const isDog = (animal:Animal) : animal is Dog=>{
    return animal instanceof Dog
}
const isCat = (animal:Animal) : animal is Cat =>{
    return animal instanceof Dog
}

const getAnimal = (animal: Animal) =>{
    if(isDog(animal)){
        animal.makeBark()
    }
    else if(isCat(animal)){
        animal.makeMeaw()
    }
    else{
        animal.getSound()
    }

}

const dog = new Dog('dog bhai','dog')

const res1 = getAnimal(dog)