"use strict"

// without reverse method
function reverseArray(arr) {
    let newArr = [];
    for ( let i = arr.length - 1; i >= 0; i-- ) {
        newArr.push( arr[i] );
    }
    return newArr;
}

function reverseArrayInPlace(arr) {
    var i = Math.floor(arr.length / 2);

    for (var j = 0; j < i; ++j) {
        var tmp = arr[arr.length - j - 1];
        arr[arr.length - j - 1] = arr[j];
        arr[j] = tmp;
    }

    return arr;
}

console.log( reverseArrayInPlace( [1,2,3,4,5,6,7] ) );