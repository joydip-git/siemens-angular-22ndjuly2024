function add(a, b) {
    return a + b
}

function invoke(fnRef, arg1, arg2) {
    return fnRef(arg1, arg2)
}

var result = invoke(add, 12, 13)
console.log(result);