function test() {
    //var x = 10
    let x = 10
    console.log(x); //10
    for (var i = 0; i < 1; i++) {
        //var x = 20
        let x = 20
        console.log(x);//20
    }
    //here the o/p will be 20 instead of 10, since JS does not provide separate scoping for local variables with same name in a function (inside and outside of control flow statements, such as, for loop, if..else, switch..case, do..while, while etc.)
    //with let keyword you will get expected output, as the let keyword can be used to declare scoped variable with the same name
    console.log(x);//20

    //JS is loosely typed (no data-typification and a variable can be assigned to values of different types at different point of time)
    var someValue = 100
    someValue = 200
    var exp = someValue.toExponential(2)
    console.log(exp);

    someValue = "joydip"
    //codes
    // var exp = someValue.toExponential(2) <= will throw error
    // console.log(exp);
    console.log(someValue);

    const constValue = 100
    //during development time, you will not get any error for this line, as there is NO static compilation for JS
    //but you will get runtime error
    //constValue = 200
    console.log(constValue);

    //constant array (the array variable is constant, NOT the array itself)
    const numbers = [1, 2, 3, 4]
    //you can't assign a new array object reference to the nu bers variable
    //numbers = [10, 20]
    numbers.push(100)
    console.log(numbers);
}
test()