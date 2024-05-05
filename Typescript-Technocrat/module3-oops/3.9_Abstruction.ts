// abstraction ===> there are two types of abstruction use cases . 1/ interface 2/ abstruct

// abstruction using interface

// idea
interface Vehicle1 {
    startEngine():void;
    stopEngine():void;
    move():void;

}

// real implementation
class Car1 implements Vehicle1 {
    startEngine(): void {
        console.log("i am starting engine")
    }
    stopEngine(): void {
        console.log('i am stoping engine')
    }
    move(): void {
        console.log('i am moving engine')
    }
    test(){
        console.log('i am testing')
    }
    

}

// create instance 
const ToyotaCar = new Car1()
ToyotaCar.startEngine()


// bastruction concept using abstract class === also called leader class

// leader ke jmne follow kori ei class ke same bakira follow korbe

// abstract class ke follow korte parba kintu aita theke kichu instance banate parba na


// abstract class like interface just lead the idea not implepentation
abstract class Car2 implements Vehicle1 {
   abstract startEngine(): void 
    abstract stopEngine(): void 
    abstract move(): void 
    test(){
        console.log('i am testing')
    }
    

}

class hondaCar extends Car2{
    startEngine(): void {
        console.log('i am start engine')
    }
    stopEngine(): void {
        console.log("i am stop engine")
    }
    move(): void {
        console.log('i am moving')
    }
}

// const HondaCar = new Car2()
// HondaCar.startEngine()

