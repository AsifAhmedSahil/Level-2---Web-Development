const user = {
    id: 125,
    name: {
        firstName: "asif",
        middleName: "Ahmed",
        lastName: "Sahil"
    },
    address: "chittagong"
};
const { address, name: { middleName } } = user;
// array destructuring
const myFriends = ["sahil", "asif", "ahmed"];
const [, bestFriend] = myFriends;
export {};
