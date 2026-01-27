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

const companyMap = {} // tao mang rong

// quet companies va truyen vao companyMap la id va co gia tri la ten cong ty
for (company  of companies) {
    companyMap[company.id] = company.name
}

for (person of persons){
    const {companyId} = person
    delete person.companyId

    if(companyId === null){
        person.company = null
        continue
    }
    else{
        person.company = companyMap[companyId]
    }
}

console.log(persons)

