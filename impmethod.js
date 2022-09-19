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
// const users = [
//     {userId: 1, userNmae: "Mohan"},
//     {userId: 2, userNmae: "shubham"},
//     {userId: 3, userNmae: "shubhash"},
//     {userId: 4, userNmae: "shubham"},
//     {userId: 5, userNmae: "gamly"},
// ];

// const myUser = users.find((user)=>user.userId === 3);
// console.log(myUser);

//every method
//every method ---> true/false(boolean) value foall the element inside the array is even
// const numbers = [2,4,6,8,10];
// const everynumber = numbers.every((number)=>number%2===0);
// console.log(everynumber);

// const userCart =[
//     {userId: 1, productName: "mobile", price: 12000},
//     {userId: 1, productName: "laptop", price: 22000},
//     {userId: 1, productName: "tv", price: 15000},
// ]
// const greterprice = userCart.every((cardprice) => cardprice.price<30000);
// console.log(greterprice);


//sum method

// const numbers = [3,5,2,9];
// const evennum = numbers.some((number)=>number%2===0);
// console.log(evennum);

// const userCart =[
//     {userId: 1, productName: "mobile", price: 12000},
//     {userId: 1, productName: "laptop", price: 30000},
//     {userId: 1, productName: "tv", price: 15000},
// ];
// const greaterprice = userCart.some((priceses)=>{
//     return priceses.price>30000;
// });
// console.log(greaterprice);

//fill method
//values, start, end
// const myArray = new Array(10).fill(10);
// console.log(myArray);

//splice method
// const myArray = ['item1','item2','item3'];
// const deletedItem = myArray.splice(1,1);
// console.log("deleated item", deletedItem);
// console.log(myArray);

//insert
const myArray = ['item1','item2','item3'];
myArray.splice(2,0,'insert element');
// console.log("inseryedItem is", insertedItem);
console.log(myArray);

