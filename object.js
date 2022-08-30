//  starting with object 
//TODO: OBJECT

var user = {
    firstName: "Mohan",
    lastName: "Chaudhary",
    role: "Student",
    loginCount: 32,
    facebookSighnedIn: true,
};
console.log(user.firstName);
console.log(user["lastName"]);
user.loginCount = 50;
console.log(user);
console.table(user);