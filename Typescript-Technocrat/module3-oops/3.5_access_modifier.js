"use strict";
// Access Modifier 
class Account {
    // private means it only access between class object === >> private property er agee akta underscore dite hoi
    constructor(id, name, _balannce) {
        this.id = id,
            this.name = name,
            this._balance = _balannce;
    }
    updateBalance(amount) {
        this._balance = this._balance + amount;
    }
    getBalance() {
        return this._balance;
    }
}
const SahilAccount = new Account(111, 'sahil', 50);
SahilAccount.updateBalance(80);
const total_balance = SahilAccount.getBalance();
console.log(total_balance);
