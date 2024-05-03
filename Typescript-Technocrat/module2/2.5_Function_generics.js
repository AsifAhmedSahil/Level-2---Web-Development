"use strict";
// function with generics***********
const createArray = (params) => {
    return [params];
};
const createArrayWithGenerics = (params) => {
    return [params];
};
const res1 = createArray('sahil');
const resGeneric1 = createArrayWithGenerics(true);
const resGeneric2 = createArrayWithGenerics(1);
const resGeneric3 = createArrayWithGenerics('sahil');
const resGenericObj = createArrayWithGenerics({ id: 125, name: 'sahil' });
const createArrayWithTuple = (params1, params2) => {
    return [params1, params2];
};
const res2 = createArrayWithTuple('sahil', "asif");
const resGeneric10 = createArrayWithTuple('sahil', 125);
const addCourseStudent = (student) => {
    const course = 'next level web dev';
    return Object.assign(Object.assign({}, student), { course });
};
const stu1 = addCourseStudent({
    name: 'sahil',
    gmail: 'asif@gmail.com',
    devtype: 'newbe'
});
const stu2 = addCourseStudent({
    name: 'sahil',
    gmail: 'asif@gmail.com',
    hasWatch: 'Apple Watch'
});
