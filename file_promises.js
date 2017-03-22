const fs = require('fs')
const R = require('ramda')

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

// fs.readFile('./sample.txt', 'utf-8', function (err, data) {
//   console.log(data)
// })
const isEven = x => x % 2 == 0

const lines = R.split('\r\n')

const filterEmptyLines = R.filter(R.compose(R.not, R.isEmpty))

const zipValues = R.converge(R.zip , [ R.identity , R.compose(R.range(0), R.length) ])

const changeCase = R.cond([
  [R.compose(isEven , R.last) , R.compose(R.toUpper, R.head)  ],
  [R.T , R.compose(R.toLower, R.head) ]
])

const changeCaseOfAllElements = R.map(changeCase)

readFile('./sample.txt').then(lines)
  .then(filterEmptyLines)
  .then(zipValues)
  .then(changeCaseOfAllElements)
  .then(console.log)
