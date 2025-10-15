const convertToCelsius = function(temp) {
	let result = (temp-32)*5/9;
	return (Math.round(result*10)/10);

};

const convertToFahrenheit = function(temp) {
	let result = temp*9/5+32
	return (Math.round(result*10)/10);
};

function formatToOneDecimalNoRound(number) {
  const multiplied = number * 10;
  const truncated = Math.trunc(multiplied);
  const result = truncated / 10;
  return result;
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
