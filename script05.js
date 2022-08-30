//User is omly allow to make a purchase when he is:
//logged in
//emailverified
//cardInfo -valid
// if any one is missing, stop purchase

var isLoggedIn = true;
var isEmailVerified = true;
var cardInfo = true;

// if(isLoggedIn){
//     console.log("Logged in success");
//     if(isEmailVerified){
//         console.log("Email is verified");
//         if(cardInfo){
//             console.log("you can make a purchase");
//         }
//     }

// }


// var email = true;
// var facebook = false;
// var google = false;

// if (email){
//     console.log("Login success");
// }
// if(facebook){
//     console.log("Login success");
// }

// if(google){
//     console.log("Login success");
// }


// second way of condistion
var email = false;
var facebook = false;
var google =false;

if(email || facebook ||google){
    console.log("login successfully");
}
else{
    console.log("your are note logged in ");
}





