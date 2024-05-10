// 10. Create a function that takes a parameter which can be either a string or an array of strings. If it's a string, return the uppercase version of the string. If it's an array of strings, return an array with each string in uppercase.

function convertToUppercase(input: string | string[]){
    if(typeof input === "string"){
        console.log(input.toUpperCase())
    }
    else if(typeof Array.isArray(input)){
        console.log(input.map((str) => str.toUpperCase()))
    }
    else{
        throw new Error("invalid input");
        
    }

}

console.log(convertToUppercase("sahil"))
console.log(convertToUppercase(["sahil",'asif']))