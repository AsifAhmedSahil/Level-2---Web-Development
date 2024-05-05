"use strict";
// Access Modifier 
class Account {
    // private means it only access between class object
    constructor(id, name, balannce) {
        this.id = id,
            this.name = name,
            this.balance = balannce;
    }
    updateBalance(amount) {
        this.balance = this.balance + amount;
    }
    getBalance() {
        return this.balance;
    }
}
const SahilAccount = new Account(111, 'sahil', 50);
SahilAccount.updateBalance(80);
const total_balance = SahilAccount.getBalance();
console.log(total_balance);
