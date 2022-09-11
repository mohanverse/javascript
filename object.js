//  starting with object 
//TODO: OBJECT

// method in object
// let userDetailCourse = {
//     firstName: "Mohan",
//     lastName: "Chaudhary",
//     role: "Student",
//     googleLogin: true,
//     courseList: [],
//     buyCorse: function (courseName){
//     this.courseList.push(courseName);
//     },

//     getCourseCount: function(){
//         return `${userDetailCourse.firstName} is enrolled ${this.courseList.length} coursea`;
//     },
// }


// console.log(userDetailCourse.firstName);
// userDetailCourse.buyCorse("Angular.js");
// console.log(userDetailCourse.courseList);
// userDetailCourse.buyCorse("react js");
// console.log(userDetailCourse.courseList);
// console.log(userDetailCourse.getCourseCount());

// //keys
// console.log(Object.keys(userDetailCourse));
// //values
// console.log(Object.values(userDetailCourse));

// //cheaking key
// console.log(userDetailCourse.hasOwnProperty("firstName"));



let userDetails = {
    firstName: "Mohan",
    lastName: "Chaudhary",
    role: "Student",
    loginCount: 25,
};

for(let x in userDetails){
    //console.log(x);
    //console.log(userDetails[x]);
    console.log(`key is ${x} and values is ${userDetails[x]}`);
    
}

