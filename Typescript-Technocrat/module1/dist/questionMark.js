"use strict";
var _a, _b;
const age = 18;
if (age >= 18) {
    console.log("adult");
}
else {
    console.log("not adult");
}
// turnery operator
const isAdult = age > 18 ? "adult" : "not adult";
// Nullish Coalescing -- > only null and undefined value er upor kaj korbe 
const isAuthenticated = null || undefined;
const user = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : "Guest";
const myuser = {
    name: "sahil",
    address: {
        city: "ctg",
        road: "ctg",
        presentAddress: "chandgaon"
    }
};
const permanentAddress = (_b = (_a = myuser === null || myuser === void 0 ? void 0 : myuser.address) === null || _a === void 0 ? void 0 : _a.permanentAddress) !== null && _b !== void 0 ? _b : "No Address Found";
console.log(permanentAddress);
