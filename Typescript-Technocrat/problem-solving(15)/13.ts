// 13. Create a generic function that takes an array of elements and returns the first element of the array. Add a constraint to ensure that the generic type can be compared using the > operator.


function getFirstElement<T extends number | string>(array: T[]):T | undefined{
    if (array.length > 0) {
        return array[0];
      } else {
        return undefined;
      }
}

const numberA: number[] = [1, 2, 3, 4, 5];
const firstNumber = getFirstElement(numberA);
console.log(firstNumber); // Output: 1

const string: string[] = ["apple", "banana", "cherry"];
const firstString = getFirstElement(string);
console.log(firstString); // Output: "apple"