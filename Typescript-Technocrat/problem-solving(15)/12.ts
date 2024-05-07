// 12. Create a function that takes an input parameter of type unknown. Inside the function, implement type guards to check if the input is of type string or number and perform different operations based on the type.

function unknownInput(input:unknown){
    if(typeof input === 'string'){
        console.log('this is a string...')
    }
    else if(typeof input === 'number'){
        console.log('this is a number')
    }
    else{
        console.log('jani na aita ki')
    }

}

unknownInput("sahil")