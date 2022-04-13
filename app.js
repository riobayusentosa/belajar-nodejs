// CommonJS, semua file adalah module
// Modules, encapsulated code (only share minimum)

const names = require('./4-names')
const sayHi = require('./5-utiles')
const data = require('./6-alternative-flavor')
require('./7-mind-grenade')

sayHi("Rio")
sayHi(names.john)
sayHi(names.peter)