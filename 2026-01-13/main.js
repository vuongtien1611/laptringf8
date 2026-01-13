const students =
     [
         {id: 1, name: "Jerry"}
         ,{id: 2, name: "Tom"}
         ]

for( let student of students ){
    console.log(student)
    student.name = "Jack"
}

console.log(students)

//----------------------------------------------------------------//


const student = {
    id: 1,
    name: 'John',
    'custom-key': 'value'
};

// new key
// student.adress = '123 Main St';
// student['age'] = 25

// console.log(student);

// const key = 'custom-key'
// console.log(student['custom-key'])


// student[key] = 'custom value' // update value
// console.log(student['custom-key'])


// delete student['age']   // delete key
// console.log(student)

// lay ra tat ca cac key va value
// for(const item in student){
//     console.log(item + ": " + student[item])  // lay ca key ca value
// }


const keys = Object.keys(student)
console.log(keys)

const values = Object.values(student)
console.log(values)



























