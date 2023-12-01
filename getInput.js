import fs from 'fs';

export const getInput = (day, part, example = false) => {
  const file = example 
    ? `./${day}/${part}/example_input.txt`
    : `./${day}/input.txt`
  return fs.readFileSync(file, 'utf8')
}
