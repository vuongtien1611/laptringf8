const companies = [
    {id: 1, name: "fpt"},
    {id: 3, name: "vettel"},
    {id: 2, name: "vnpt"}
]

const persons = [
    {id: 1, name: "Huong Tran", companyId: 3},
    {id: 2, name: "Dong Vu", companyId: 1}
    ,{id: 3, name: "Tien Vuong", companyId: null},
    {id: 4, name: "Son nguyen", companyId: 2},
    {id: 5, name: "Bach Hoang", companyId: 3},
]

/*
* console.log(personName, '--', companyName)
* console.log(`${personName} -- ${companyName})`
* Huong Tran -- viettel
* Dong Vu -- fpt
* Tien Vuong --
* */

//----------------------------------------------------------------------//

//
// for (let person of persons) {
//     let companyName = ""
//
//     for (let company of companies) {
//         if (company.id === person.companyId) {
//             companyName = company.name
//             break
//         }
//     }
//
//     console.log(person.name + " -- " + companyName)
// }

//------------------------------------------------------------------------//

// viet ham findCompanyByPersonId(persons, companyId) in ra ten cong ty voi id nao = companyId

function findById(arr, id) {
    for (const item of arr) {
        if (item.id === id) {
            return item
        }
    }
}

function findCompanyByPersonId(persons, companies, personId) {
    const person = findById(persons, personId)
    if (!person) return null

    const { companyId } = person
    if (companyId == null) return null

    const company = findById(companies, companyId)
    return company ? company.name : null
}

console.log(findCompanyByPersonId(persons, companies, 1))














