// Access Modifier 

class Account{

    public readonly id:number;
    public name:string;
    private _balance:number
    // private means it only access between class object === >> private property er agee akta underscore dite hoi


    constructor(id:number,name:string,_balannce:number){
        this.id = id,
        this.name = name,
        this._balance = _balannce

    }

    updateBalance(amount:number){
        this._balance = this._balance + amount
    }
    getBalance(){
        return this._balance
    }
    
}

const SahilAccount = new Account(111,'sahil',50)
SahilAccount.updateBalance(80)
const total_balance = SahilAccount.getBalance()
console.log(total_balance)
