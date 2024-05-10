//6. Define a type alias called Coordinates that represents the latitude and longitude of a location. It should be an object with latitude and longitude properties, both of which are numbers. Create a variable of type Coordinates and assign some sample values to it.

type Coordinates = {
    latitude:number;
    longitude:number;
}

const Tcordinate:Coordinates = {
    latitude : 40.256,
    longitude : -48056
}

console.log(Tcordinate.latitude)
console.log(Tcordinate.longitude)