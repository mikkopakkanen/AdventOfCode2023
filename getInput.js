const fs = require('fs');
const getInput = (day, example = false) => {
  const file = example 
    ? `./${day}/input/example_input.txt`
    : `./${day}/input/input.txt`
  return fs.readFileSync(file, 'utf8')
}

module.exports = getInput