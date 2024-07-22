// import { Person } from "./9-class-ctor-getters-setters-static";
const anilObject = {
    name: 'anil',
    id: 1,
    salary: 10000,
    friends: [{
        name: 'sunil',
        location: 'bangalore'
    }, {
        name: 'mahesh',
        location: 'chennai'
    }]
}

// const nameValue = anilObject.name
// const salaryvalue = anilObject.salary

//object destructuring
const { name: nameValue, salary: salaryValue } = anilObject

console.log(nameValue, salaryValue);

const numbers = [10, 20, 30, 40]
// const second = numbers[1]
// const fourth = numbers[3]

//array destructuring
const [, second, , fourth] = numbers
console.log(second, fourth);

//const loc = anilObject.friends[1].location
//const name = anilObject.friends[1].name
const { friends: [, { location: loc, name }] } = anilObject
console.log(loc, name);