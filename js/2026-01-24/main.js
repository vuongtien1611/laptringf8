const firsName = 'An'
const lastName = 'Vu'

// console.log(firsName.toUpperCase()) // AN
// console.log(lastName.toLowerCase()) // vu
//
// console.log(`${firsName} ${lastName}`)
//
// const a = Symbol('test')
// const b = Symbol('test')
//
// console.log(a, b)
// console.log(a === b)

const name = 'vuongtien'

console.log(name.includes('ng')) // check xem name co ng trong chuoi khong
console.log(name.indexOf('n'))   // lay index cua ky tu n trong chuoi

const newName = name.replace('ng', 'aY')  // sua ng thanh aY trong chuoi name

console.log(newName)