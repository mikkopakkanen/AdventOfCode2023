import { readInput } from '../../utils/readInput.js'

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

const sumIndices = (values) => {
  const tmp = values.reduce((agg, game) => {
    const multiply = game.reduce((acc, val) => acc = acc * parseInt(val.amount), 1)
    agg += multiply
    return agg
  }, 0)
  return tmp
}

const groupByLargestValue = (games) => {
  const summedAmounts = []
  for(const game of games) {
    const amounts = Object.values(
      game.reduce((agg, game) => {
        if (agg[game.color] === undefined) agg[game.color] = { color: game.color, amount: 0 }
        agg[game.color].amount = +game.amount > +agg[game.color].amount 
          ? game.amount
          : agg[game.color].amount
        return agg
      }, {})
    )
    summedAmounts.push(amounts)
  }
  return summedAmounts
}

const Day2Pt2 = () => {
  const input = readInput(2, 2)
  const rows = Array.from(input.split("\r\n"))

  const splitted = splitGames(rows);
  const values = groupByLargestValue(splitted)
  const result = sumIndices(values)

  console.log("Day 2 part 1:")
  console.log(result)
}

export default Day2Pt2
