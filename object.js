//  starting with object 
//TODO: OBJECT

// method in object
let useDetailCourse = {
    firstName: "Mohan",
    lastName: "Chaudhary",
    role: "Student",
    googleLogin: true,
    courseList: [],
    buyCorse: function (courseName){
    this.courseList.push(courseName);
    },
}

useDetailCourse.buyCorse("pro backend");
console.log(userDetailCourse.courseList);