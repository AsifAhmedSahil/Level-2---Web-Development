
function add(num1:number,num2:number):number{
    return num1 + num2;
}

add(2,2)

const addArrow = (num1:number,num2:number):number => num1+num2

// a function into object is called method***

const poorUser = {
    name: "sahil",
    balance: 0,
    addBalance(balance:number):number{
        return this.balance + balance
    }
}