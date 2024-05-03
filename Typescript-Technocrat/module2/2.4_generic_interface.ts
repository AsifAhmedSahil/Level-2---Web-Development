
interface Developer<T,X = null> {
    name:string,
    computer: {
        brand:string,
        model:string,
        releaseDate: number
    },
    smartWatch: T,
    bike?: X
}

type EmilabWatch = {
    brand: string,
    display: string
}

const poorDeveloper :Developer<EmilabWatch> ={
    name:'sahil',
    computer: {
        brand:"asus",
        model: 'vivobook 512',
        releaseDate: 25
    },
    smartWatch: {
        brand:'Emilab',
        display:'OLED'
    }
}

interface AppleWatch {
    brand: string,
    display: string,
    heartTrack: boolean
}

interface Yamaha {
    brand:string,
    engine: string
}

const richDeveloper :Developer<AppleWatch,Yamaha> ={
    name:'Asif',
    computer: {
        brand:"asus",
        model: 'vivobook 512',
        releaseDate: 25
    },
    smartWatch: {
        brand:'Apple',
        display:'Amulate',
        heartTrack: true
    },
    bike: {
        brand:'R15',
        engine: '100cc'
    }
}