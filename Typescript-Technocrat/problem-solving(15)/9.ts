// 9. Define two interfaces: Car with properties like make, model, and year, and Driver with properties like name and licenseNumber. Create a function that takes objects of type Car and Driver and returns an object with the combined properties of both types.

// logic
interface Car{
    make:string;
    model:string;
    year:number;
}

interface Driver{
    name:string;
    licenseNumber:number;
}

function combineCarAndDriver(car:Car , driver:Driver):{car:Car , driver:Driver}{
    return {
        car:car,
        driver:driver
    }

}

// example

const myCar : Car = {
    make:"Audi",
    model:"A7",
    year:2023
}

const driveCar : Driver = {
    name:"sahil",
    licenseNumber: 1912

}

console.log(combineCarAndDriver(myCar,driveCar))
