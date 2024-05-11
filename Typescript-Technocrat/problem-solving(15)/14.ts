// 14. Create a function that takes two parameters: one can be either a string or number, and the other can be either a boolean or an array of strings. Implement logic in the function to perform different operations based on the types of the parameters.

function performOperations(
    param1 : string | number,
    param2: boolean | string[]
) : void {
    if(typeof param1 === "string" && Array.isArray(param2)){
        console.log("Performing operation 1")
        console.log(`param 1: ${param1.toUpperCase()}`)
        console.log(`param 2 length: ${param2.length}`)
    }
    else if (typeof param1 === "number" && typeof param2 === "boolean"){
        console.log(`param1 squared: ${param1 * param1}`)
        console.log(`param2: ${param2}`)
    }
    else{
        console.log("invalid type input")
    }
}

const param1 = "sahil"
const param2 = ["sahil","asif"] 
console.log(performOperations(param1,param2))