"use strict"

function range( start, end, step = 1 ) {
    if ( step === 0 ) return 0;

    let arr = [];

    if ( step > 0 && start < end ) {
        for (let i = start; i <= end; i += step) {
            arr.push( i );
        }
        return arr;
    }

    if ( step < 0 && start > end ) {
        for (let i = start; i >= end; i += step) {
            arr.push( i );
        }
        return arr;
    }

    return 0;
}

function sum(arr) {
    let res = 0;
    for ( let val of arr ) {
        res += val;
    }
    return res;
}

// console.log(sum(range(1,10)));
console.log(range(10,1, -1));