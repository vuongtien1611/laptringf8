const a ={
    id: 1,
    Name: 'A',
    address: 'Ha Noi',
    girlFriend: {
        id: 1,
        Name: 'Tran Ha',
    }
}



//add "address"
// a.address = 'Ha Noi'

// const b = JSON.parse(JSON.stringify(a))
//
// b.name = 'B'
//
// console.log(a)  // { id: 1, Name: 'A', address: 'Ha Noi' }
//
// console.log(b) // { id: 1, Name: 'A', address: 'Ha Noi', name: 'B' }


// b = {}
// b.id = a.id
// b.name = a.Name
// b.address = a.address
// b.name = 'B'
//
//
// console.log(a)
// console.log(b)



const b = {
    ...a,
    address: 'Ha Noi'
}

console.log(a,b)
