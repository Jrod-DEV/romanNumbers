'use strict'

function deromanize (romanNumber) {
  romanNumber = romanNumber.toUpperCase()
  const token = /[MDLV]|C[MD]?|X[CL]?|I[XV]?/g
  const key = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 }
  let num = 0
  let m
  if (!(romanNumber && validatorRoman(romanNumber))) {
    return 'Número incorrecto.'
  // eslint-disable-next-line no-cond-assign
  } while (m = token.exec(romanNumber)) {
    num += key[m[0]]
  } return num
}
function validatorRoman (romanNumber) {
  const validator = /^M*(?:D?C{0,3}|C[MD])(?:L?X{0,3}|X[CL])(?:V?I{0,3}|I[XV])$/
  return validator.test(romanNumber)
}
const convert = (number) => {
  return deromanize(number)
}
const validator = (romanNumber) => {
  return validatorRoman(romanNumber)
}
exports.convert = convert
exports.validator = validator
