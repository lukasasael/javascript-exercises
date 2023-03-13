const leapYears = function (year) {
    if (year % 4 == 0 && year % 100 != 0) {
        creturn("Leap year")
    } else if (year % 100 == 0 && year % 400 == 0) {
        return ("Leap year")
    } else
        return ("Not leap year")
};

// Do not edit below this line
module.exports = leapYears;
