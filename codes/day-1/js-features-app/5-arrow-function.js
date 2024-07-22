//function declaration
function multiply(a, b) {
    return a * b
}

//function expression
const divide = function (a, b) {
    return a / b
}

//arrow function style syntax is for function EXPRESSION, NOT for function DECLARATION

//function expression using arrow function with expression body
const add = (a, b) => a + b

//function expression using arrow function without expression body, with function body
const subtract = (a, b) => {
    return a - b
}