//1. Create a function that takes an array of numbers as input and returns the sum of all the numbers in the array. Make sure to define the types for the input parameter and return value.

function takeArray(array:number[]):number {

    let sum = 0

    for(let num of array){
        sum += num
    }

    return sum

}

console.log(takeArray([1,2,3,4,5]))