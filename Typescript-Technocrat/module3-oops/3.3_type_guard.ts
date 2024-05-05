// type guard  ==> typeOf

type AlphaNumeric = string | number

const add = (params1:AlphaNumeric,params2:AlphaNumeric):AlphaNumeric =>{
    if(typeof params1 === 'number' && typeof params2 === 'number'){
        return params1 + params2
    }
    else{
        return params1.toString() + params2.toString()
    }

}

const res1 = add(2,3)
const res2 = add('2','3')

console.log(res1,res2);

// =============== type in ==============

type NormalUser = {
    name:string
}

type AdminUser = {
    name:string,
    role:string
}

const getUser = ( user : NormalUser | AdminUser) =>{
    if('role' in user ){
        console.log(`my name is ${user.name}. my role is ${user.role}`)
    }
    else{
        console.log(`my name is: ${user.name}`)
    }

}

const normalUser : NormalUser = {
    name:'sahil'
}

const adminUser :AdminUser = {
    name:'Asif bhai',
    role:"admin"
}