import { getInput } from '../../getInput.js'

const sumFirstAndLast = (val) => {
  const numbers = val.filter(v => Number.isInteger(parseInt(v)));
  return numbers.length > 1 
    ? parseInt(numbers[0] + numbers[numbers.length-1])
    : parseInt(numbers[0] + numbers[0]);
}

const Day1Pt2 = () => {
  const input = getInput(1);
  const rows = Array.from(input.split("\r\n"));
  const total = rows.reduce((total, current) => total + sumFirstAndLast([...current]), 0);
  console.log(total);
}

export default Day1Pt2
