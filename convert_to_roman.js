'use strict'

function convertToRoman (number) {
  const dataArray = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  }
  let roman = ''

  for (const index of Object.keys(dataArray)) {
    const counter = Math.floor(number / dataArray[index])
    number -= counter * dataArray[index]
    roman += index.repeat(counter)
  }
  return roman
}
const convert = (number) => {
  return convertToRoman(number)
}
exports.convert = convert
