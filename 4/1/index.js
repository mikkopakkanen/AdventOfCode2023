import { readInput } from '../../utils/readInput.js'

const splitNumbers = (hands) => {
  const winningNumbers = hands[0].split(" ").filter(v => v)
  const playerNumbers = hands[1].split(" ").filter(v => v)
  return playerNumbers.map(p => winningNumbers.includes(p) ? p : null).filter(v => v)
}

const splitHands = (row) => {
  const hands = row.split("|")
  return splitNumbers(hands)
}

const splitGames = (rows) => {
  const games = []
  for (const row of rows) {
    const splitted = row.split(/Card\s+\d+: /g)
    const hands = splitHands(splitted[1]);
    if(hands.length > 0 ) games.push(hands)
  }
  return games
}

const Day4Pt1 = () => {
  const input = readInput(4)
  const rows = Array.from(input.split("\r\n"))
  const matches = splitGames(rows);
  const result = matches.map(m => m.reduce((acc, val, i) => {
    if(m.length === 1) return 1
    if(i === 1) acc = 1
    acc = acc * 2
    return acc
  }, 1)).reduce((acc, val) => acc + val, 0);

  console.log("Day 4 part 1:")
  console.log(result)
}

export default Day4Pt1
