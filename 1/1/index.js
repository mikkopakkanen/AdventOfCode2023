const getInput = require('../../getInput.js')

const sumFirstAndLast = (val) => {
  const numbers = val.filter(v => Number.isInteger(parseInt(v)));
  return numbers.length > 1 
    ? parseInt(numbers[0] + numbers[numbers.length-1])
    : parseInt(numbers[0] + numbers[0]);
}

const Day1Part1 = () => {
  const data = getInput(1);
  const rows = Array.from(data.split("\r\n"));
  const total = rows.reduce((total, current) => total + sumFirstAndLast([...current]), 0);
  console.log(total);
}

module.exports = Day1Part1