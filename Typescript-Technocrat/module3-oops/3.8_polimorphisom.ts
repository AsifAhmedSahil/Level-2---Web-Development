// polimorphisom ==> same function different type output dei based on parameter***

class Person{
    getSleep(){
        console.log('i am sleeping 8 hours per day')
    }
}
class Student extends Person{
    getSleep(){
        console.log('i am sleeping 7 hours per day')
    }
}
class Developer extends Person{
    getSleep(){
        console.log('i am sleeping 6 hours per day')
    }
}

const getSleepHours = (param:Person) => {
    param.getSleep()

}

// create instance 
const person = new Person()
const student = new Student()
const developer = new Developer()


// call with polimorphisom

getSleepHours(person)
getSleepHours(student)
getSleepHours(developer)

// another example =============>

    class Shape {
        getArea():number{
            return 0
        }
    }

    class CircleArea extends Shape {
        radius:number ;
        constructor(radius:number){
            super()
             this.radius = radius
        }
        getArea(): number {
            return Math.PI * this.radius * this.radius
            
        }
    }

    // reactangle

    class Reactangle extends Shape {
        height:number ;
        width:number ;
        constructor(height:number,width:number){
            super()
             this.height = height
             this.width = width
        }
        getArea(): number {
            return  this.height * this.width
            
        }
    }

    const getShapeArea = (param: Shape) =>{
        console.log(param.getArea())

    }
    // instance create===
    const shape1 = new Shape()
    const shape2 = new CircleArea(10)
    const shape3 = new Reactangle(10,20)

    getShapeArea(shape1)
    getShapeArea(shape2)
    getShapeArea(shape3)
