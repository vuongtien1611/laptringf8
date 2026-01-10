//--------------Vong lap truyen thong(for in)---------------//

// log 1 -> 10

// let i = 0;
// for (let i = 1; i <= 10; ++i)   // for ( điểm bắt đầu vòng lặp; điều kiệu kết thúc ; giá trị cập nhật sau mỗi vòng lặp)
//     console.log(i)                           // code
// -> lam bai tap (ex01)


// -----------------for of---------------------------//
//
// const arr = [1, 2, 3, 4, 5]
//
// for (let i of arr) {    // bien i se gan thang gia tri cua phan tu trong mang
//     console.log(i)
// }



// kiem tra xem so 11 trong sortedNumbers co index la bao nhieu

const sortedNumbers = [1, 2, 3, 4, 5, 6, 7, 11, 12, 13]
// const getINdex = (arr, n) => {
//
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === n) {
//             return i
//         }
//     }
//
// }

// console.log(getINdex(sortedNumbers, 11))


// in ra nhung so nho hon 11 trong sortedNumbers

count = 0
for (let number of sortedNumbers) {
    count++
    if(number < 11)
        console.log(number)
    else
        break
}

console.log(count)


//------------------------continue---------------------------//

for (let i = 1; i <= 5; i++) {

    if (i === 3) {
        console.log("Bo qua so 3")
        continue // nhay sang i = 4 luon va khong in ra so 3
    }

    console.log("In:", i)
}








