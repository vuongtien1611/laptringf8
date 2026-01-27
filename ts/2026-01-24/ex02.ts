interface Employee {
    id: number,
    name: string,
    salary: number,
    active: boolean
}

const employee: Employee[] = [
    {
    id: 1,
    name: 'Nguyen Van A',
    salary: 1000,
    active: true
},
    {
        id: 2,
        name: 'Vu Van B',
        salary: 2000,
        active: false
    },
    {
        id: 3,
        name: 'Pham Van C',
        salary: 1500,
        active: true
    }

]

const activeEmployee = employee.filter(emp => emp.active)

console.log(activeEmployee)

const e = employee.find(emp => emp.id === 1)

console.log(e)