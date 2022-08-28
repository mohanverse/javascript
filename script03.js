//operators

// var num1 = 7;
// var num2 = 6;
// console.log(num1+num2);

// var ans = num1 > num2;
// console.log(ans);

var sellingPrice = 199;
var listingPrice = 799;

var discountPercennt = ((listingPrice-sellingPrice)/listingPrice*100);
console.log(discountPercennt);

displayDiscountpercentage = Math.round(discountPercennt);
console.log("the discountpercentage is : " + displayDiscountpercentage + "% off");


var result = listingPrice > sellingPrice;
console.log(result);