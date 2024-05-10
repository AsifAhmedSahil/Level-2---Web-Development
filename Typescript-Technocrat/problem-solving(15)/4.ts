// reverse a array which is generics types

function reverseArray<T>(array:T[]){
    return array.reverse()
}

console.log(reverseArray([1,2,3,4]))