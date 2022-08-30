// function

// function sayHello(name) {
//     console.log("Hello there, shubham");
//     console.log(`Hello there, ${name}. how are you`);

// }

// sayHello("Mohan");
// sayHello("Shubham");


// function namstey(){
//     return "Hello in india";
// }

// var greeting = namstey();
// console.log(greeting);
// console.log(namstey());

var getUserRole = function (name, role){
// function getUserRole = function (name, role)
    switch (role) {
        case "admin":
            return `${name} is admin with all access`
            break; //this is note necessary
        case "subadmin":
            return `${name} is sub-admin with the access to create and and deleate courses`
            break; //this is note necessary
        case "testprep":
            return `${name} is testprep with the access to create and and deleate test`
            break; //this is note necessary
        case "user":
            return `${name} is a user to consume content`
            break; //this is note necessary
    
        default:
            return `${name} is trial user`;
            break;
    }
}

console.log(getUserRole("Mohan", "testprep"));
console.log(getUserRole("shubham", "user"));
console.log(getUserRole("mohanverse", "admin"));





//assighment
// remove the all breack

var getUserRole = function (name, role){
    // function getUserRole = function (name, role)
        switch (role) {
            case "admin":
                return `${name} is admin with all access`
                
            case "subadmin":
                return `${name} is sub-admin with the access to create and and deleate courses`
                
            case "testprep":
                return `${name} is testprep with the access to create and and deleate test`

            case "user":
                return `${name} is a user to consume content`
                
        
            default:
                return `${name} is trial user`;
                
        }
    }
    
    console.log(getUserRole("Mohan", "testprep"));
    console.log(getUserRole("shubham", "user"));
    console.log(getUserRole("mohanverse", "admin"));
    
    
    
    
    
