var numbers = [10, 2, 4, 51, 7, 6]
function isEven(num) {
    return num % 2 === 0
}
var evenNumbers = numbers.filter(isEven)

console.log('even numbers');
for (var ele of evenNumbers) {
    console.log(ele);
}

var oddNumbers = numbers.filter(
    function (num) {
        return num % 2 !== 0
    }
)
console.log('odd numbers');
oddNumbers.forEach(
    function (num) {
        console.log(num);
    }
)

var found = numbers.find(
    function (num) {
        return num === 3
    }
)
console.log('3 is present or not');
//console.log(found !== undefined ? found : 'NA');
console.log(found ? found : 'NA');
// if (found) {

// }
var foundIndex = numbers.findIndex(
    function (num) {
        return num === 4
    }
)
console.log('index of 4');
console.log(foundIndex);

var sortedNumbers = numbers.sort(
    (a, b) => a - b
)
console.log("sorted numbers");
sortedNumbers.forEach((num) => console.log(num))

console.log("values from map..");
var transformed = numbers.map((num) => "value: " + (num * 2))
transformed.forEach(numStr => console.log(numStr))