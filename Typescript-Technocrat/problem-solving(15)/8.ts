// 8. Create a base class called Shape with a method calculateArea that returns the area of the shape. Extend this class to create subclasses for specific shapes like Rectangle and Circle. Implement the calculateArea method in each subclass and test it with different dimensions.

abstract class Shape{
    abstract calculateArea():number;
}

class Rectangle extends Shape{
    constructor(private height:number,private width:number){
        super()
    }
    calculateArea(): number {
        return this.height * this.width
    }
}

// call rectangle class method with instance 
// const rectangle = new Rectangle(5,10)
// console.log(rectangle.calculateArea())

class Circle extends Shape{
    constructor(private radius:number){
        super();

    }
    calculateArea(): number {
        return Math.PI * this.radius * this.radius
    }
}

const circle = new Circle(5);
console.log(circle.calculateArea())


