// type assertion

let anything : any

anything = "next level";
anything = 125;


(anything as string).toLocaleLowerCase();
(anything as number).toFixed()

const kgToGm = (value: string | number): string | number | undefined =>{
    if(typeof value === 'string'){
        let convertValue = parseFloat(value)*1000
        return `the converted value is: ${convertValue}`
    }
    if(typeof value === 'number'){
        return value *1000
    }
}

const result1 = kgToGm(100) as number
const result2 = kgToGm("100") as string

type CustomError = {
    message: "Error"
}

try {
    
} catch (error) {
    console.log((error as CustomError).message)
    
}