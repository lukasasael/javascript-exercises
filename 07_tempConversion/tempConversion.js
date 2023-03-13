const convertToCelsius = function (temperature) {
  let result = (temperature - 32) * 5 / 9;
  return result.toFixed(1);
};

const convertToFahrenheit = function (temperature) {
  let result = (temperature * 9 / 5) + 32;
  return result.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
