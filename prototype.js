//
// const user1 = {
//     firstName: "mohan",
//     lastName: "chaudhary",
//     email: "mohanchaudhary@gmail.com",
//     age: 2,
//     address: "house no ,clony, pincode, state",
//     about: function(){
//         return `${this.firstName} is ${this.age} years old`
//     },
//     is18: function (){
//         return this.age >= 18;
//     }

// }
// const aboutuser = user1.about();
// console.log(aboutuser);
// const is18store = user1.is18();
// console.log(is18store);



//function(that fuction create object)
// add key value pair
//object return the karega 
const userMethods ={
    about: function(){
        return `${this.firstName} is ${this.age} years old`;
    },
    is18: function (){
        return this.age >= 18 
    }
}

function createUser (firstName, lastName,email,age,address){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = userMethods.about;
    user.is18 = userMethods.is18;
    return user;
}
const user1 = createUser('mohan', 'chaudhary', 'mohanverse@gmail.com',17,'myaddres');
const user2 = createUser('shubham', 'chaudhary', 'mohanverse@gmail.com',20,'myaddres');

console.log(user1.about());
console.log(user2.about());