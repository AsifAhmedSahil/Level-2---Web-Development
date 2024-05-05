"use strict";
// type guard  ==> typeOf
const add = (params1, params2) => {
    if (typeof params1 === 'number' && typeof params2 === 'number') {
        return params1 + params2;
    }
    else {
        return params1.toString() + params2.toString();
    }
};
const res1 = add(2, 3);
const res2 = add('2', '3');
console.log(res1, res2);
const getUser = (user) => {
    if ('role' in user) {
        console.log(`my name is ${user.name}. my role is ${user.role}`);
    }
    else {
        console.log(`my name is: ${user.name}`);
    }
};
const normalUser = {
    name: 'sahil'
};
const adminUser = {
    name: 'Asif bhai',
    role: "admin"
};
