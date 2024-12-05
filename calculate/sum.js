// Modules protect their variable and function from leaking

console.log("Sum Module Executed");

function calculateSum(a,b){
    const sum= a+b;

    console.log(sum);
}

module.exports= {calculateSum}





z= "Sharoz" //This will work in commonjs bcz common js runn in non-strict mode
//console.log(module.exports)
// as module.exports is a empty object {}, so we also attach properties like below
//module.exports.x= x;
//module.exports.calculateSum= calculateSum;