import { readInput } from '../../utils/readInput.js'

const letterObj = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9
}

const re = new RegExp(/(?=(one|two|three|four|five|six|seven|eight|nine))/g);

const sumFirstAndLast = (val) => {
  const numbers = val.filter(v => parseInt(v));
  return numbers.length > 1 
    ? parseInt(numbers[0] + numbers[numbers.length-1])
    : parseInt(numbers[0] + numbers[0]);
}

const replaceLetters = (source, matches) => {
  for(const match of matches) {
    source = source.replaceAll(re, letterObj[match]);
  }
  return source;
}

const lettersToDigits = (source) => {
  const matches = Array.from(source.matchAll(re), x => x[1])
  return matches ? replaceLetters(source, matches) : null
}

const Day1Pt2 = () => {
  const input = readInput(1);
  const rows = Array.from(input.split("\r\n"));
  const modifiedRows = rows.map(lettersToDigits).filter(row => row);
  const result = modifiedRows.reduce((total, current) => total + sumFirstAndLast([...current]), 0);

  console.log("Day 1 part 2:")
  console.log(result);
}

export default Day1Pt2
