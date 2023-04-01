const fibonacci = function (a) {
    if (a < 0)
        return "OOPS";
    a = parseInt(a);
    let total = [1, 1];
    for (let i = 1; i < a; i++) {
        total[i + 1] = total[i - 1] + total[i];
    }
    return (total[a - 1]);
};

// Do not edit below this line
module.exports = fibonacci;
