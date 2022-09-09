//methods of array
//array iterator

var arr1 = ['a', 'b', 'c'];
var iterator1 = arr1[Symbol
.iterator]();
for (var value of iterator1){
   // console.log(value);
} 

//array method at()

var arr = [5, 12, 8, 130, 44];


var index = 2;
console.log(`the ${index} index is ${arr.at(index)}`);

//using slice() is at()

var arr01 = arr02.at(-2);
console.log(arr01);


//concat



var array1 = ['a', 'b', 'c'];
var array2 = ['d', 'e', 'f'];
var array3 = array1.concat(array2);
//console.log(array3);

// var array4 = [1, 2, 3]
// var array5 = array1.concat(array4);
//console.log(array5);



//foreach
const array4 = ['a', 'b', 'c'];

array4.forEach(element => console.log(element));






