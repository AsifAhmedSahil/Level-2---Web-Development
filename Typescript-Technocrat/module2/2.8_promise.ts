
const createPromises= () :Promise<string> =>{
    return new Promise <string>((resolve,reject) =>{
        const data : string = 'something'
        if(data){
            resolve(data)
        }
        else{
            reject()
        }
    })
}

// calling create promise functions

const showData = async () =>{
    const data : string = await createPromises()
    return data
    // console.log(data)
}

showData()