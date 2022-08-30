// CONTEXT
// sayHello(); 
// function sayHello(){
//     console.log("Hello");
// }





// sayHello(); 

// if(2 === "2"){
//     console.log("this is true");
// }
// else{
//     console.log("this is Not true");
// }





// var myName = "Mohan";

// // this is window of the in the console
// if(myName === window.myName){
//     console.log("this is again a true statement");
// }




//context

// var num = 2;
// function sayme(){
//     console.log("say me");
// }

// sayme();

// function tipper(a){
//     var bill = parseInt(a);
//     console.log(bill + 5);
// }

// tipper("5")



// scope chain

var name = "Mohan";

console.log("line number 56", name);

function sayName(){
    //var name = "My M";
    console.log("line number 59", name);
    
    sayNameTwo();
    function sayNameTwo(){
        console.log("Line number 64", name)
    }

}

sayName();