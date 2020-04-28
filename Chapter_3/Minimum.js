"use strict"

function minimum(...args) {
    let min = args[0]
    for (let val of args) {
        min = val < min ? val : min;
    }
    return min;
}

console.log(minimum(123,11,66,900,12,8));