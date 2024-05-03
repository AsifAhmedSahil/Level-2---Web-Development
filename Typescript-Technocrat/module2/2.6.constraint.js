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
export {};
