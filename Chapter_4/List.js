"use strict"

function arrayToList(arr) {
    let list = {};
    for ( let i = arr.length - 1; i >= 0; i-- ) {
        let nextRest = list || null;
        list = {};
        list["value"] = arr[i];
        list["rest"] = nextRest;
    }

    return list;
}

function listToArray(list) {
    let arr = [];
    arr.push(list.value);
    let rest = list.rest;

    while (rest) {
        arr.push( rest.value );
        rest = rest["rest"];
    }

    return arr;
}

function prepend(elem, list) {
    return {value: elem, rest: list}
}


function nth(list, index) {
    if (!list.rest && index !== 0) return undefined;
    return (index !== 0) ? nth(list.rest, --index) : list.value;
}



console.log( listToArray({ value: 1, rest: { value: 2, rest: { value: 3, rest: null } } } ) );