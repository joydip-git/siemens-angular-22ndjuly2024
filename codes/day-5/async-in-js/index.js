const divide = async (a, b) => {
    const res = a / b
    if (res === Infinity) {
        const err = new Error('divisor can not be zero')
        throw err
    }
    return res
}

const add = (a, b) => a + b

async function callDivide() {
    try {
        const res = await divide(12, 3)
        console.log(res);
    } catch (error) {
        console.log(e);
    }
}

callDivide()

//const divPromise = divide(12, 3)
// divPromise
//     .then(
//         (res) => {
//             console.log(res);

//         },
//         (e) => { console.log(e); }
//     )

console.log(add(12, 3))