// function user(){
//     console.log("mohan");
// }
// user()

// function sumOftwo(a, b){
//     return a+b;
// }
// const returnsum = sumOftwo(2,4);
// console.log(returnsum);


// function sumOfthree(a, b, c){
//     return a+b+c;
// }
// const returnsumOfthreenum = sumOfthree (1, 2, 5);
// console.log(returnsumOfthreenum);

//isEven
//input 1
//output : true, false
//  function isEven(num){
//     if(num % 2 == 0){
//         return true;
//     }
//     return false;
//  }
// console.log(isEven(99));

 //find index
//  function findTarget(array, target){
//     for(let i=0; i<array.length; i++){
//         if(array[i]==target){
//             return i;
//         }
//     }
//     return -1;

//  }
//  const myarray=[1, 2, 4, 6, 7];
//  const ans = findTarget(myarray, 7);
//  console.log(ans);



// arrow function
//decrealtion of arrow function

// const sighnName = () =>{
//     console.log("hello there i am mohanverse");
// }
// sighnName();

// sum of three numbers
// const sumOfthree = (a, b, c) => {
//     return a + b + c;
// } 
// const ans = sumOfthree(2, 4, 5);
// console.log(ans);

// const isEven = (num) =>{
//     return num % 2 == 0;
// }
// isEven(5);
// console.log(isEven(5));



//function inside funtion
// const app = () => {
//     const myfunc = () => {
//         console.log("inside app in the func");
//     }

//     const addtwo = ( a, b ) => {
//         return a+b;
//     }

//     const multwo = ( a, b ) => {
//         return a*b;
//     }
//     console.log("inside app");
//     myfunc();
//     console.log(addtwo(1,32));
//     console.log(multwo(2,4));
// }
// app()

// lexical scope
// const myVar = "value1";
// function myApp(){
    

//     function myFunc(){
//         //const myVar = "valiue49";
//         const myfunc2 = () => {
//             console.log("inside my app", myVar);

//         } 
//         myfunc2();
//     }
//         const myFunc3 = () => {};
//         console.log(myVar);
//         myFunc()
// }
// myApp();


// Block scope and fuction scope
//let and const are block scope
// var is a function scope
// {
//     const firstName = "mohan";
//     console.log(firstName);
// }
// {
//     var firstName = "mohanchaudhary"; 
// }
// console.log(firstName);


// function myApp(){
//     if(true){
//         var firstName = "mohan";
//         console.log(firstName);
//     }
//     if(true){
//         console.log(firstName);
//     }
//     console.log(firstName);

// }
// myApp();



// default parameter

// function addtwo(a, b=0){
//     return a+b;
// }
// const ans = addtwo(4, 7);
// console.log(ans);


// rest parameter
// function myfunc(a, b, ...c){
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is`, c);
// }
// myfunc(1,4,4,6,7,8,9);

// function sum(...thenums) {
//     let total = 0;
//     for (const num of thenums) {
//       total += num;
//     }
//     return total;
//   }
  
//   console.log(sum(1, 2, 3));


// parameter destructucring
//use of object and react
const person = {
    firstName: "moham",
    gender: "male",
}
// function printDetails(obg){
//     console.log(obg.firstName);
//     console.log(obg.gender);
// }
// function printDetails({firstName, gender}){
//     console.log(firstName);
//     console.log(gender);
// }
// printDetails(person);





//callback function

// function myFunc2(name){
//     console.log(`i am ${name}`);
//     console.log(`insiside my func to callback function 2`);
// }
// function myFunc(callback){
//     console.log('hello there i am mohan mumar chaudhary');
//     callback('mohan')
// }
// myFunc(myFunc2);


// function returning( function
// function myFunc(){
//     function hello(){
//         return "hello world";
//     }
//     return hello;
// }
// const ans = myFunc();
// console.log(ans());









