'use strict'
const convertToRoman = require('./convert_to_roman')
const convertToNumber = require('./convert_to_number')
var fs = require('fs')

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

function isEmpty (str) {
  return (!str || str.length === 0)
}
function writeResultsFile (input, fs) {
  fs.appendFileSync('results.txt', input, (err) => {
    if (err) {
      console.log('Se ha producido un error')
    }
  })
}
