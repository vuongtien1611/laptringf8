const person = {
    Firstname: "Jerry",
    Lastname: "Nguyen",
    age: 18,
    address: "10 tran phu",

    getName: function () {
        return this.Firstname + " " + this.Lastname;
    },

    girlFriend: {
        Firstname: "Anna",
        Lastname: "Tran",
        age: 17,
        address: "20 le loi",
        getName: function () {
            return this.Firstname + " " + this.Lastname;
        }
    }
};

console.log(person.getName());
console.log(person.girlFriend.getName());

// console.log(person.address)   ||    console.log(person["address"])



















