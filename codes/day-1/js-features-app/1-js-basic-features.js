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

//function expression thorugh arrow function
var multiply = (a, b) => {
    return a * b
}

//function expression through expression body in arrow function 
//returning value
var divide = (a, b) => a / b

//not returning a value
var divide = (a, b) => console.log(a / b)

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

//var numbers = new Array(10, 20, 30, 50, 40, 70)
var numbers = [10, 20, 40, 70, 30, 60]
console.log(typeof numbers);

numbers.push(100)
numbers.push(200, 300)

for (var index = 0; index < numbers.length; index++) {
    console.log(index + ":" + numbers[index]);
}

numbers.splice(2, 3)
var copyOfNumbers = numbers.slice(0, 5)
for (var element of copyOfNumbers) {
    console.log(element);
}

for (var i in numbers) {
    console.log(i + ":" + numbers[i]);
}



//}
//main()