// nullable Types ==============
function Searchname(value) {
    if (value) {
        console.log("searching");
    }
    else {
        console.log("there are nothing to search");
    }
}
Searchname(null);
// unknown type***************
var getSpeedInMeter = function (value) {
    if (typeof value === 'number') {
        var result = (value * 1000) / 3600;
        console.log("the speed in meter is: ".concat(result, " ms^-1"));
    }
    else if (typeof value === "string") {
        var _a = value.split(" "), result = _a[0], unit = _a[1];
        var converted = (parseFloat(result) * 1000) / 3600;
        console.log("the speed in meter is: ".concat(converted, " ms^-1"));
    }
    else {
        console.log("wrong input");
    }
};
getSpeedInMeter('100 km^-1');
getSpeedInMeter(1000);
// never type ==> konodin kichu return korbe na ei function
var throwError = function (msg) {
    throw new Error(msg);
};
throwError("error throw kor");
