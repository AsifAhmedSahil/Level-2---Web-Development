// explicite type in object

const user1 = {
    firstName: "Asif",
    middleName: "Ahmed",
    lastName: "Sahil"
}

// implicite type in object

const user2: {
    // when value assign on type that is called literal type****
    company: "Programming hero"
    firstName: string;
    middleName?: string;  //optional type thats why use optional chaining
    lastName: string
} = {
    company:"Programming hero",
    firstName: "Asif",
    middleName: "Ahmed",
    lastName: "Sahil"
}

