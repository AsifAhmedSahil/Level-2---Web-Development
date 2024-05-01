
// nullable Types ==============

function Searchname(value:string | null){
    if(value){
        console.log("searching")
    }
    else{
        console.log("there are nothing to search")
    }
}

Searchname(null)

// unknown type***************

const getSpeedInMeter = (value:unknown) =>{
    if(typeof value === 'number'){
        const result = (value*1000)/3600
        console.log(`the speed in meter is: ${result} ms^-1`)

    }
    else if(typeof value ==="string"){
        const [result,unit] = value.split(" ")
        const converted = (parseFloat(result)*1000)/3600
        console.log(`the speed in meter is: ${converted} ms^-1`)
    
    }
    else{
        console.log("wrong input")
    }

}

getSpeedInMeter('100 km^-1')
getSpeedInMeter(1000)
// never type ==> konodin kichu return korbe na ei function

const throwError = (msg:string):never =>{
    throw new Error(msg)
}

throwError("error throw kor")


