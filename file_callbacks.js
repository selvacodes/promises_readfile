const fs = require('fs')

function readFile (filename) {
  fs.readFile(filename, 'utf-8', function (err, data) {
    let splittedLines = data.split('\n')
    let outputArray = []
    for (let i = 0; i <= splittedLines.length; i++) {
      if (typeof splittedLines[i] == 'string' && splittedLines[i] != '') {
        if (i % 2 == 0) {
          outputArray.push(splittedLines[i].toUpperCase())
        } else {
          outputArray.push(splittedLines[i].toLowerCase())
        }
      }
    }
    console.log(outputArray)
  })
}

function readTwoFiles (filename1, filename2 , outputFile) {
  fs.readFile(filename1, 'utf-8', function (err, file1_data) {
    let splittedLines_one = file1_data.split('\n')
    let outputArray = []
    fs.readFile(filename2, 'utf-8', function (err, file2_data) {
      let splittedLines_two = file1_data.split('\n')
      for (let i = 0; i <= splittedLines_two.length; i++) {
        if (typeof splittedLines_one[i] == 'string' && splittedLines_one[i] != '') {
          if (i % 2 == 0) {
            outputArray.push(splittedLines_one[i].toUpperCase())
          } else {
            outputArray.push(splittedLines_one[i].toLowerCase())
          }
        }
      }
      for (let i = 0; i <= splittedLines_two.length; i++) {
        if (typeof splittedLines_two[i] == 'string' && splittedLines_two[i] != '') {
          if (i % 2 == 0) {
            outputArray.push(splittedLines_two[i].toUpperCase())
          } else {
            outputArray.push(splittedLines_two[i].toLowerCase())
          }
        }
      }
      fs.writeFile(outputFile, outputArray.join('\n'), 'utf-8', function (err, data) {
        console.log('Written successfully')
      })
      console.log(outputArray)
    })
  })
}

readFile('./sample.txt')
//readTwoFiles('./sample.txt', './sample2.txt', 'output.txt')
