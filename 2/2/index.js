import { readInput } from '../../utils/readInput.js'

const limits = {
  red: 12,
  green: 13,
  blue: 14
}

const splitCubes = (set) => {
  const cubes = set.toString().replaceAll(" ", "").split(",")
  let results = []
  for(const cube of cubes) {
    const matches = cube.match(/\d+|blue|red|green|^/g)
    results.push({ color: matches[1], amount: matches[0] })
  }
  return results
}

const splitSets = (row) => {
  const sets = row.split(";")
  return splitCubes(sets)
}

const splitGames = (rows) => {
  const games = []
  for (const row of rows) {
    const splitted = row.split(/Game \d+: /g)
    games.push(splitSets(splitted[1]))
  }
  return games
}

const getPossibleGames = (games) => {
  const possibleGames = games.map((set) => {
    return set.map(color => color.amount <= limits[color.color])
  })
  return possibleGames.map(g => !g.some(v => v === false))
}

const sumIndices = (possibleGames) => {
  return possibleGames.reduce((agg, possible, index) => {
    index++
    if(possible) agg = agg + index
    return agg
  }, 0)
}

const Day2Pt2 = () => {
  const input = readInput(2, 2, true)
  const rows = Array.from(input.split("\r\n"))

  const possibleGames = getPossibleGames(splitGames(rows))
  const result = sumIndices(possibleGames)

  console.log("Day 2 part 1:")
  console.log(result)
}

export default Day2Pt2
