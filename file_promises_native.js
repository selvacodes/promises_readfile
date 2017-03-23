const R = require('ramda')
const fs = require('fs')

// readFile:: String -> Promise String
const readFile = function (filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, 'utf-8', function (err, data) {
      if (err) {
        reject(err)
      }
      resolve(data)
    })
  })
}

// writeFile :: String -> String -> Promise ()
const writeFile = filename => data => {
  return new Promise((resolve, reject) => {
    fs.writeFile(filename, data, 'utf-8', function (err, data) {
      if (err) {
        reject(err)
      }
      resolve('Written successfully')
    })
  })
}

// isEven :: Int -> Bool
const isEven = num => num % 2 == 0

// lines :: String -> [String]
const lines = R.split('\n')

// rejectEmptyLines :: [String] -> [String]
const rejectEmptyLines = R.filter(R.compose(R.not, R.isEmpty))

// changeCaseOfAllElements :: [String] -> [String]
const changeCaseOfAllElements = arr => arr.map((value, index) => isEven(index) ? value.toUpperCase() : value.toLowerCase())

// joinWithNewLine:: [String] -> String
const joinWithNewLine = R.join('\n')

readFile('./sample.txt').then(lines)
  .then(rejectEmptyLines)
  .then(changeCaseOfAllElements)
  .then(joinWithNewLine)
  .then(writeFile('./output.txt'))
  .then(console.log)

// Read two fileis
// Promise.all([readFile('./sample.txt'), readFile('./sample2.txt')])
//   .then(R.map(lines))
//   // .then(R.converge(R.zip, [R.head, R.last]))
//   // .then(R.tap(console.log))
//   .then(R.flatten)
//   .then(rejectEmptyLines)
//   .then(changeCaseOfAllElements)
//   .then(joinWithNewLine)
//   .then(writeFile('./output.txt'))
//   .then(console.log)
