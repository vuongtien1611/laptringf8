// forEach

const numbers = [0,3,4,1,3,4,5,7,9]


    /*
     const callBack = (value) => {
    console.log(value)
    }

    numbers.forEach(callBack)

     */

// co the viet ngan gon nhu sau

// numbers.forEach((value, index) => {
//     console.log(value , index)
// })


// indexOf

const index = numbers.indexOf(4) // so bon co index la bao nhieu
console.log(numbers.indexOf(3 , 4))                                       // neu gia tri truyen vao indexOf khong co trong mang thi tra ve -1
                                         // dung de check phan tu trong mang
console.log(index)