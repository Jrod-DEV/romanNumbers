'use strict'

ReadAndWrite()

function isEmpty (str) {
  return (!str || str.length === 0)
}
async function writeResultsFile (input, fs) {
  fs.appendFileSync('results.txt', input, (err) => {
    if (err) {
      console.log('Se ha producido un error')
    }
  })
}
async function ReadAndWrite () {
  const convertToRoman = require('./convert_to_roman')
  const convertToNumber = require('./convert_to_number')
  const fs = require('fs').promises
  fs.readFile('data.txt', 'utf8', function (_err, contents) {
    var contentsSplited = contents.split('\n')
    contentsSplited.forEach(element => {
      if (!isEmpty(element) && convertToNumber.validator(element)) {
        const number = convertToNumber.convert(element).toString() + '\n'
        writeResultsFile(number, fs)
      } else if (!isEmpty(element)) {
        const roman = convertToRoman.convert(element).toString() + '\n'
        writeResultsFile(roman, fs)
      }
    })
  })
}
