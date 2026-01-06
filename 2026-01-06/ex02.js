const person = {
    name: "Jerry",
    age: 18,
    address: "HN",
    sefl: function (){
        return this
    }
}

person.sefl().sefl().sefl().name = "Tom"

console.log(person)
const name = person.name   //  const {name} = person  (hai cach viet cho ket qua giong nhau)

console.log(name)



const str = `${name} nam nay ${age} tuoi`
console.log(str)