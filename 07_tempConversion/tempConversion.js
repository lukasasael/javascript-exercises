const convertToCelsius = function (temperature) {
  let result = (temperature - 32) * 5 / 9;
  result = parseFloat(result.toFixed(1));
  return result;
};

const convertToFahrenheit = function (temperature) {
  let result = (temperature * 9 / 5) + 32;
  result = parseFloat(result.toFixed(1));
  return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};