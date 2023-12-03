import { readInput } from '../../utils/readInput.js'

const specialCharacters = ['@', '#', '$', '%', '&', '*', '=', '+', '/', '-']

const adjacents = [
  [0, 1],   // Top
  [0, -1],  // Bottom
  [-1, 0],  // Left
  [1, 0],   // Right
  [1, 1],   // Top right
  [-1, 1],  // Top left
  [1, -1],  // Bottom right
  [-1, -1]  // Bottom left
]

function isSurroundedBySpecial(grid, x, y) {
  const match = adjacents.find(([adjecantX, adjecantY]) => {
    const posX = x + adjecantX
    const posY = y + adjecantY

    return posX >= 0 // Check if out of bounds on the left.
      && posX < grid.length //   Check if out of bounds on the right
      && posY >= 0 && posY < grid[0].length // Check if out of bounds on the top or bottom
      && specialCharacters.includes(grid[posX][posY])
  })

  if (!match) {
    return null
  }

  return {
    x: x + match[0],
    y: y + match[1],
  }
}

export function p1(lines) {
  const grid = lines.map(line => line.split(''))

  const surroundedNumbers = []

  grid.forEach((line, y) => {
    return [...line.join('').matchAll(/\d+/g)].map(match => {
      const startOfMatch = match.index

      if (typeof startOfMatch === 'undefined') {
        return
      }

      let matchSurrounded = false

      for (let x = 0; x < match[0].length; x++) {
        if (isSurroundedBySpecial(grid, y, startOfMatch + x)) {
          matchSurrounded = true
          break
        }
      }

      if (matchSurrounded) {
        surroundedNumbers.push(parseInt(match[0]))
      }
    })
  })

  return surroundedNumbers.reduce((acc, curr) => acc + curr, 0)
}

const Day3Pt1 = () => {
  const input = readInput(3)
  const rows = Array.from(input.split("\r\n"))
  const result = p1(rows);
  console.log("Day 3 part 1:")
  console.log(result)
}

export default Day3Pt1
