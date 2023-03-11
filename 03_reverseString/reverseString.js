const reverseString = function (string) {
    let normal = string.split("");
    let reverse = [];
    for (let l, i = 0; i < string.length; i++) {
        l = normal.pop();
        reverse.push(l);
    }
    reverse =reverse.join("");
    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
