// function calculateAverage(name, marks) {

// }
/**
 * 
calculateAverage('anil', [50, 60])
calculateAverage('sunil', [63, 75, 87])
calculateAverage('joydip', [45, 65, 77, 81])
 */

//parameter array: can directly store any number of parameters in it when the function is called over and agin and unknown of arguments are passed every time
//(...) => rest operator to declare parameter array
//such parameter array should be the only one in the list of arguments in the function's argument list and that array should be the last one in the argument list. all fixed arguments should be passed first whule calling the function and then pass remaining arguments to parameter array
function calculateAverage(name, ...marks) {
    let sum = 0
    if (marks && marks.length > 0) {
        marks.forEach(mark => sum += mark)
    }
    return sum / marks.length
}
console.log(calculateAverage('anil', 50, 60))
console.log(calculateAverage('sunil', 63, 75, 87))
console.log(calculateAverage('joydip', 45, 65, 77, 81))
