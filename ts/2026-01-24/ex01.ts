// const a: string = 'Vu Huy'
//
// const IsCorrect: boolean = true


interface Person {
    id: number,
    name: string
}

interface Customer{
    active: boolean
}

interface Employee extends Person, Customer {     // Employee lấy toàn bộ thuộc tính của Person, rồi mở rộng thêm thuộc tính mới.
    // id: number,
    // name: string
    age?: number
    // active: boolean
}

const person = {
    id: 1,
    name: 'test'
}

const employee: Employee[] = [{
    id: 1,
    name: 'test',
    age: 20
    ,active: true
}
]

console.log(employee)