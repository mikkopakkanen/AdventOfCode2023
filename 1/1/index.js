import { readInput } from '../../utils/readInput.js'

const sumFirstAndLast = (val) => {
  const numbers = val.filter(v => parseInt(v));
  return numbers.length > 1 
    ? parseInt(numbers[0] + numbers[numbers.length-1])
    : parseInt(numbers[0] + numbers[0]);
}

const Day1Pt1 = () => {
  const input = readInput(1);
  const rows = Array.from(input.split("\r\n"));
  const result = rows.reduce((total, current) => total + sumFirstAndLast([...current]), 0);

  console.log("Day 1 part 1:")
  console.log(result);
}

export default Day1Pt1
