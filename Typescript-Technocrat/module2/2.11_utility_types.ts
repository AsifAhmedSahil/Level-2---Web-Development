type Person = {
    name:string,
    age:number,
    email?:string,
    
}

// use pick for only pick some types
type utility = Pick<Person,"name"|'age'>

// use omit for not choosing any type data

type emailOmit = Omit<Person,"email">

// require type full no optional quantity
type personRequire = Required<Person>

// to convert all property optional than we use partial
type pertialType = Partial<Person>

// readonly types

type readonlyPerson = Readonly<Person>

const personReadonly : readonlyPerson = {
    name:'sahil',
    age:25,
    email:'sada@gsj'
}

