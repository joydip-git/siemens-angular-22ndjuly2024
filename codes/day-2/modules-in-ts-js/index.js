// console.log(add(12, 13));
// console.log(subtract(12, 13));

//const utilityModuleExports = require('./utility')
// console.log(utilityModuleExports);
// console.log(module);
//console.log(utilityModuleExports.addFn(12, 13));
//console.log(utilityModuleExports.subtractFn(12, 3));

// const { addFn: addMethod, subtractFn: subMethod } = require('./utility')

// console.log(addMethod(12, 3))
// console.log(subMethod(12, 3));

// const { addFn, subtractFn } = require('./utility')
// console.log(addFn(12, 3))
// console.log(subtractFn(12, 3));

// const { add, subtract } = require('./utility')
// console.log(add(12, 3));
// console.log(subtract(12, 3));

import subtract, { add } from "./utility";
console.log(add(12, 3));
console.log(subtract(12, 3));

