// mapped types

const arrayOfNumber : number[]= [1,2,5,6,8] 

const arrayOfString : string[] = arrayOfNumber.map(number => number.toString())

console.log(arrayOfString)

type AreaNumber = {
    height: number,
    width: number
}
// look up type
type Height = AreaNumber["height"]



// using look up and generics 

type AreaString<T> = {
    [key in keyof T] : T[key]
}

const result1: AreaString<{height:string,width:number}> = {
    height:'sahil',
    width: 100
}

