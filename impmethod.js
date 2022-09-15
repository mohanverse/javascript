// important array methods

// const numbers = [4,2,5,8];
// function multwo(number, index){
//     console.log("index is ", index);
//     console.log(`${number}*2=${number*2}`);
// }
// numbers.forEach(multwo);
// for(let i = 0; i<numbers.length; i++){
//     multwo(numbers[i],i);
// } 



//map method
// const users = [
//     {firstName: "mohanverse", age:23},
//     {firstName: "shubham", age:19},
//     {firstName: "shubhash", age:18},
//     {firstName: "mohan", age:20},
// ]

// const userName = users.map((user)=>{
//     return user.firstName;
// });
// console.log(userName);

// filter method

// const store = [1,2,3,4,5,6];
// const isEven = function(number){
//     return number%2==0;
// }
// const evenNumbers = store.filter(isEven);
// console.log(evenNumbers);

//reduse method
// const array1 = [
//     {prodectId: 1, productName: "mobile", Price: 15000},
//     {prodectId: 2, productName: "tv", Price: 15000},
//     {prodectId: 3, productName: "laptop", Price: 13000},
// ];
// const sumWithInitial = array1.reduce(
//   (previousValue, currentValue) => {
//     return  previousValue + currentValue.Price
// },0);

// console.log(sumWithInitial);



// short
// const products = [
//     {productId: 1, productName: "p1", price: 200},
//     {productId: 2, productName: "p2", price: 450},
//     {productId: 3, productName: "p3", price: 1200},
//     {productId: 4, productName: "p4", price: 300},
// ]
// //lowTohight
// const sortproduct = products.slice(0).sort((a,b)=>{return a.price-b.price});
// console.log(sortproduct);


// const products = [
//     {productId: 1, productName: "p1", price: 200},
//     {productId: 2, productName: "p2", price: 450},
//     {productId: 3, productName: "p3", price: 1200},
//     {productId: 4, productName: "p4", price: 300},
// ]
// //highrtTolow
// const sortproduct = products.slice(0).sort((a,b)=>{return b.price-a.price});
// console.log(sortproduct);

// find method
// const myArray = ["Hello", "cat", "dog", "lion"]
// function islength3(string){
//     return string.lenght == 3;

// }
// const ans = myArray.find((string)=>string.length === 3);
// console.log(ans);

//find methode
const users = [
    {userId: 1, userNmae: "Mohan"},
    {userId: 2, userNmae: "shubham"},
    {userId: 3, userNmae: "shubhash"},
    {userId: 4, userNmae: "shubham"},
    {userId: 5, userNmae: "gamly"},
];

const myUser = users.find((user)=>user.userId === 3);
console.log(myUser)
