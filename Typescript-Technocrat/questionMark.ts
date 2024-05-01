const age:number = 18

if(age>=18){
    console.log("adult")
}
else{
    console.log("not adult")
}

// turnery operator

const isAdult = age >18 ? "adult" : "not adult"

// Nullish Coalescing -- > only null and undefined value er upor kaj korbe 

const isAuthenticated = null || undefined
const user = isAuthenticated ?? "Guest"

type user1 = {
    name:string,
    address: {
        city:string,
        road: string,
        presentAddress: string,
        permanentAddress?: string
    }

}

const myuser: user1 ={
    name:"sahil",
    address:{
        city:"ctg",
        road:"ctg",
        presentAddress:"chandgaon"
    }
}

const permanentAddress = myuser?.address?.permanentAddress ?? "No Address Found"
console.log(permanentAddress)

