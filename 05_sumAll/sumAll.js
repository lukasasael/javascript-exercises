const sumAll = function (int1, int2) {
    if ((int1 < 0 || int2 < 0) || (!Number.isInteger(int1) || !Number.isInteger(int2)))
        return ('ERROR');
    let sum = 0;
    let actual_number = Math.min(int1, int2);
    let counter = Math.abs(int1 - int2) + 1;
    for (let i = 0; i < counter; i++) {
        sum += actual_number;
        actual_number++;
    };
    return (sum);
};

// Do not edit below this line
module.exports = sumAll;
