require("./xyz.js"); // one module into another

const {calculateMultiply, calculateSum}= require("./calculate")

var name = "Namaste Nodejs";

var a= 10;
var b= 20;

calculateSum(a,b);
calculateMultiply(a,b);

//console.log(x);
