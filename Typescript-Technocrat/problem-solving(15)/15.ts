// 15. Create a generic function called filterArray that takes an array of any type and a predicate function as parameters. The function should return a new array that contains only the elements for which the predicate function returns true. Ensure that the function is flexible enough to work with different types of arrays.

function filterArray<T>(array:T[] , predicate:(value:T) => boolean):T[]{
    const filteredArray: T[] = [];

    for(const element of array){
        if(predicate(element)){
           filteredArray.push(element)
        }
    }

    return filteredArray

}

const numArray = [1,5,4,8,2,6]
const evenNumber = filterArray(numArray,(num) => num % 2 === 0)
console.log(evenNumber)

const strArray = ['sahil','asif']
const upperCase = filterArray(strArray,(names)=>names.length > 4 )
console.log(upperCase)