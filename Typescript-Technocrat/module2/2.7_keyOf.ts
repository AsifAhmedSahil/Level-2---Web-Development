// generic constraint with keyOf operator

type vehicle = {
    bike: string,
    car: string
}

type owner1 = "bike"|"car"; //====> manually

type owner2 = keyof vehicle

// keyof operator using function 

const getProperty =<X,Y extends keyof X> (obj:X,key:Y) =>{
    return obj[key]
}

const bikeUser = {
    name:'sahil',
    model:'yamaha',
    year:2000
}

const carUser = {
    model:'toyota 100',
    year:2000
}


const result = getProperty(carUser,"model")