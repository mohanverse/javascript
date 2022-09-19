// Loops

// for(initialixation, conditon, inc/decr){
//     //code
// }

// for(let i = 1; i<5; i++){
//     console.log(`${i} * ${i} = ${i * i} `);
// }


// let con = ['india', 'sweden', 'norway', 'iceland'];
// let newcon = [];

// for (let i=0; i<con.length; i++){
//     newcon.push(con[i])
// }
// console.log(newcon);
// let con = [1, 2, 3, 5, 10];
// let newcon = [];

// for (let i = 0; i < con.length; i++){
//     newcon.push(`${con[i]}*${con[i]} = ${con[i]*con[i]}`);
// } 
// console.log(newcon);

// while loop

// let i = 0;
// while(i<=5){
//    console.log(i);
//    i++ 
// }

// do while
// let i= 0;
// do{
//     console.log(i);
//     i++
// }while(i<=5);

// for loop
// let num = [1, 2, 3, 4,5];
// for(let number of num){
//     console.log(number);
// }

// let con = ['india', 'sweden', 'norway', 'iceland'];
// for(let cont of con){
//     console.log(cont[0]);
// }

//breack and continue

// for(let i=0; i<5; i++){
//     if (i == 4){
//         break;
//     }
//     console.log(i);
// }

// continue

// for(let i=1; i<=5; i++){
//     if (i == 3){
//         continue;
//     }
//     console.log(i);
// }


// function
// Defination
//function without parameter


// function sqr(){
//     //logic
//     let x = 10;
//     let sq = x * x;
//     console.log(sq);
// }
// sqr();

// fuction with parameter
// function add(x, y){
    // let x = 25;
    // let y = 16;
    // let z = x + y;
//     let z= x+y;
//     console.log(z);
// }
// add(3, 5);

// function printfullName(firstname, lastnname){
//     let full_name = firstname + " " + lastnname;
//     return full_name;
// }

// let fn = printfullName("Mohan", "Chaudhary");
// let fN = printfullName("shubham", "Chaudhary");
// console.log(fn);
// console.log(fN);


// function areaOfcircle(r) {
//     let area = Math.PI * r * r;
//     return area;
// }
// console.log(areaOfcircle(10));

// function sumOfArray(arr){
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++){
//         sum = sum + arr[i];
//     }
//     return sum;
// }
// let numb = [1, 2, 6, 4, 5];
// let holdvalue = sumOfArray(numb);
// console.log(holdvalue);



//arrow function

const SumOffAll = (...args) => {
    let sum = 0;
    for(let element of args){
        sum = sum + element;
    }
    return sum;
};
console.log(SumOffAll(1, 2, 3, 4, 5, 6));






