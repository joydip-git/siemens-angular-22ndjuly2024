const divide = (a, b) => {
    const p = new Promise(
        //executor function
        (resolveFn, rejectFn) => {
            const res = a / b
            if (res === Infinity) {
                const err = new Error('divisor can not be zero')
                rejectFn(err)
            }
            resolveFn(res)
            //return res
            //console.log(res);
        }
    )
    return p
}

const add = (a, b) => a + b

const divPromise = divide(12, 3)
divPromise
    .then(
        (res) => {
            console.log(res);
        },
        (e) => { console.log(e); }
    )
// .catch(
//     (e) => console.log(e)
// )


console.log(add(12, 3))