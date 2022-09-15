var user = {
    firstName: "Mohan",
    lastName: "Chaudhary",
    role: "Student",
    loginCount: 32,
    facebookSighnedIn: true,
    courseList: [],
    buyCourse: function (courseName){
        this.courseList.push(courseName);
    },
    getCourseCount: function(){
        return `${this.firstName} is enrolled in the total of ${this.courseList.length} courses`;
    },

};
var courseList = true;
console.log(user.getCourseCount());
user.buyCourse("react js")
user.buyCourse("angular js")

console.log(user.getCourseCount());
console.log(user.courseList.length);
console.log(user);

