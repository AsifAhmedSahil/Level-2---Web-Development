"use strict";
// type assertion
let anything;
anything = "next level";
anything = 125;
anything.toLocaleLowerCase();
anything.toFixed();
const kgToGm = (value) => {
    if (typeof value === 'string') {
        let convertValue = parseFloat(value) * 1000;
        return `the converted value is: ${convertValue}`;
    }
    if (typeof value === 'number') {
        return value * 1000;
    }
};
const result1 = kgToGm(100);
const result2 = kgToGm("100");
try {
}
catch (error) {
    console.log(error.message);
}
