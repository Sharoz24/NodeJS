require(""); // one module into another

const {calculateMultiply, calculateSum}= require("./calculate")

const data= require("./data.json");
console.log(data);

var name = "Namaste Nodejs";

var a= 10;
var b= 20;

calculateSum(a,b);
calculateMultiply(a,b);

//console.log(x);
