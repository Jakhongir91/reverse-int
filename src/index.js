module.exports = function reverse (n) {
    let string = Math.abs(n).toString().split('').reverse().join('');

    return parseInt(string);
}
