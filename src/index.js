exports.max = function max (array) {
    return (array != null && array.length > 0) ?
        array.sort((a, b) => a - b)[array.length-1] : 0;
}

exports.min = function min (array) {
    return (array != null && array.length > 0) ?
        array.sort((a, b) => a - b)[0] : 0;
} 

exports.avg = function avg (array) {
    return (array != null && array.length > 0) ?
        array.reduce((a, b) => a + b) / array.length : 0;
}
