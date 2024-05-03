"use strict";
function Add(num1, num2) {
    return num1 + num2;
}
add(2, 2);
const addArrow = (num1, num2) => num1 + num2;
// a function into object is called method***
const poorUser = {
    name: "sahil",
    balance: 0,
    addBalance(balance) {
        return this.balance + balance;
    }
};
