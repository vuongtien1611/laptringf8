const companies = [
    {id: 1, name: "fpt"},
    {id: 3, name: "viettel"},
    {id: 2, name: "vnpt"}
]

const persons = [
    {id: 1, name: "Huong Tran", companyId: 3},
    {id: 2, name: "Dong Vu", companyId: 1},
    {id: 3, name: "Tien Vuong", companyId: null},
    {id: 4, name: "Son nguyen", companyId: 2},
    {id: 5, name: "Bach Hoang", companyId: 3},
]

// output:
    // persons = [
        // {id: 1, name: huong Tran, company: 'vnpt'},
        // {id: 2, name: "Dong Vu", company: 'fpt'},
        // {id: 3, name: "Tien Vuong", company: 'null'},
        // {id: 4, name: "Son Nguyen", company: 'vnpt'},
        // {id: 5, name: "Bach Hoang", company: 'viettel'}
    //]

// cach 1:
for (let i in persons) {
    persons[i].company = 'null'

    for (let j in companies) {
        if (persons[i].companyId === companies[j].id) {
            persons[i].company = companies[j].name
            break
        }
    }
}

console.log(persons)


// cach 2:

for (const person of persons) {
   const {companyId} = person
    delete person.companyId

    if (companyId === null) {
        person.company = null
        continue
    }

    for(const company of companies) {
        if (company.id === companyId) {
            person.company = company.name
            continue
        }
    }
}

console.log(persons)


// cach 3: (toi uu)

