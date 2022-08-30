// craete an application with following roles:
//admin -gets full access
//subadmin - gets to create/deleate courses
//testprep - gets accses create/delete tests
//user - gets acsess to consume content


var user = "abc";

switch (user) {
    case "admin":
        console.log("you get full access");
        break;
    
    case "subadmin":
         console.log("gets to create/deleate courses");
         break;

    case "testprep":
         console.log("gets accses create/delete tests");
         break;

    case "user":
         console.log("gets acsess to consume content");
         break;

    default:
        console.log("Trial user");

        break;
}




