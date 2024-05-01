var _a, _b;
var age = 18;
if (age >= 18) {
    console.log("adult");
}
else {
    console.log("not adult");
}
// turnery operator
var isAdult = age > 18 ? "adult" : "not adult";
// Nullish Coalescing -- > only null and undefined value er upor kaj korbe 
var isAuthenticated = null || undefined;
var user = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : "Guest";
var myuser = {
    name: "sahil",
    address: {
        city: "ctg",
        road: "ctg",
        presentAddress: "chandgaon"
    }
};
var permanentAddress = (_b = (_a = myuser === null || myuser === void 0 ? void 0 : myuser.address) === null || _a === void 0 ? void 0 : _a.permanentAddress) !== null && _b !== void 0 ? _b : "No Address Found";
console.log(permanentAddress);
