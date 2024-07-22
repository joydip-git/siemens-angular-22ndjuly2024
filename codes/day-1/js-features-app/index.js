//function main or global function(){
var numberValue = 12
console.log(typeof numberValue);

var nameValue = 'joydip'
console.log(typeof nameValue);

var boolValue = false
console.log(typeof boolValue);

//function declaration
function add(a, b) {
    return a + b
}
console.log(typeof add);
var addRes = add(12, 13)
console.log(addRes)

//function expression
var subtract = function (a, b) {
    return a - b
}
console.log(typeof subtract);
var subRes = subtract(12, 3)
console.log(subRes)

var objectData = {
    //value properties
    name: "joydip",
    id: 1,
    salary: 1000,

    //functional properties
    show: function () {
        return this.name + ' ' + this.id + ' ' + this.salary
    }
}
console.log(typeof objectData);

//using dot (.) operator
console.log(objectData.name);

//using indexer
console.log(objectData["salary"]);

//invoking a method
console.log(objectData.show());
//console.log(objectData["show"]());


var someData
console.log(someData); //undefined
console.log(typeof someData); //undefined

var result = someData + numberValue //someData+12
console.log(result); //Not a Number (NaN)
console.log(typeof result);//number

var resultStr = someData + nameValue //someData+'joydip'
console.log(resultStr); //undefinedJoydip
console.log(typeof resultStr);//string

var divRes = numberValue / 0;
console.log(divRes); //Infinity
console.log(typeof divRes); //number

//}
//main()