// higher order function
// mini program

// call back fuction
const callback1 = (n) => {
    return n ** 2;
};
// function to multiple sqaure with the number
function cube(callback1, n){
    return callback1(n) * n;
} 
console.log(cube(callback1, 5));