const removeFromArray = function (array, ...blacksheep) {
    const rmvarr = [...blacksheep];
    for (const num of rmvarr) {
        index = array.indexOf(num);
        array.splice(index, 1);
    }
    return (array);
};

// Do not edit below this line
module.exports = removeFromArray;
