const anilObject = {
    name: 'anil',
    id: 1,
    salary: 10000,
    friends: ['sunil', 'mahesh']
}
//anilObject.location = 'Bangalore'
//anilObject['location']='Bangalore'

//anilObject['show'] = function(){}
// anilObject.show = function () {
//     console.log('say hello to ' + this.name);
// }
// anilObject.show()

//1. by copying every property and their values (shallow)
// const copyOfAnil = {}
// for (const propName in anilObject) {
//     //console.log(`${propName}:${anilObject[propName]}`);
//     copyOfAnil[propName] = anilObject[propName]
// }

// console.log(copyOfAnil);

//2. by using Object's "assign" method
// const copyOfAnil = Object.assign({}, anilObject)
// console.log(copyOfAnil);

//3. using spread operator (...) => shallow
const copyOfAnil = {
    ...anilObject,
}

const numbers = [1, 2, 3, 4]
const copyOfNumbers = [...numbers, 100, 200]
