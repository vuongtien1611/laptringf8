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


//includes
console.log(numbers.includes(109))

// find

// const e =numbers.find((value) => value === 4)
//     console.log(e)


// VD:
// ví dụ
const products = [
    { id: 1, name: "Gạo ST25 (5kg)", price: 180000, remaining: 20 },
    { id: 2, name: "Dầu ăn Simply (1L)", price: 65000, remaining: 15 },
    { id: 3, name: "Nước mắm Nam Ngư (750ml)", price: 45000, remaining: 30 },
    { id: 4, name: "Sữa tươi Vinamilk (1L)", price: 38000, remaining: 25 },
    { id: 5, name: "Trứng gà (10 quả)", price: 42000, remaining: 18 }
];


// find element eith id = 3

// const product = products.find((product) => product.id === 3)
// console.log(product)
/*
{
  id: 3,
  name: 'Nước mắm Nam Ngư (750ml)',
  price: 45000,
  remaining: 30
}

 */



// filter elements with id > 3

// const productsFilter = products.filter(product => product.id > 3 )
// console.log(productsFilter)

/*/

{
  id: 3,
  name: 'Nước mắm Nam Ngư (750ml)',
  price: 45000,
  remaining: 30
}
[
  {
    id: 4,
    name: 'Sữa tươi Vinamilk (1L)',
    price: 38000,
    remaining: 25
  },
  { id: 5, name: 'Trứng gà (10 quả)', price: 42000, remaining: 18 }
]

 */


// map

 const ids = products.map(product => product.id)
     console.log(ids)

/*
[ 1, 2, 3, 4, 5 ]
 */



