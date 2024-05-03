"use strict";
// generic constraint with keyOf operator
// keyof operator using function 
const getProperty = (obj, key) => {
    return obj[key];
};
const bikeUser = {
    name: 'sahil',
    model: 'yamaha',
    year: 2000
};
const carUser = {
    model: 'toyota 100',
    year: 2000
};
const result = getProperty(carUser, "model");
