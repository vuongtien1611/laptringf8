// cho mang gom 6 phần tử

const numbers = [1, 3, 5, 3, 3, 4, 9, 8]

// in ra tung phan tu trong mang

function printArrayElements(array) {
     if (!Array.isArray(array)) {
        console.log("The parameter passed in is not an array.")
        return
    }
    for (let i = 0; i < array.length; i++) {
        console.log(array[i])
    }
}

printArrayElements(numbers)



// in ra nhung so chan
//
function PrintOutEvenElements(array){
    if (!Array.isArray(array)) {
        console.log("The parameter passed in is not an array.")
        return
    }
    for (let i = 0 ; i < array.length ; i++ ){
        if(array[i] % 2 === 0){
            console.log(array[i])
        }
    }
}

PrintOutEvenElements(numbers)


// tinh tong cac so le

function printOddNumbers(array){
     if (!Array.isArray(array)) {
        console.log("The parameter passed in is not an array.")
        return
    }
    sum = 0
    for (let i = 0 ; i < array.length ; i++ ){
        if(array[i] % 2 !== 0){
            sum = sum + array[i]
        }
    }
    console.log(sum)
}

console.log("printOddNumbers")
printOddNumbers(numbers)


// in ra so lon nhat trong mang

function printTheLargestNumber(array){
     if (!Array.isArray(array)) {
        console.log("The parameter passed in is not an array.")
        return
    }
    let max = array[0]
    for (let i = 1 ; i < array.length ; i++ ){
        if(array[i] > max){
            max = array[i]
        }
    }
    console.log(max)
}


printTheLargestNumber(numbers)


// in ra so be nhat trong mang


function printTheSmallestNumber(array){
     if (!Array.isArray(array)) {
        console.log("The parameter passed in is not an array.")
        return
    }
    let min = array[0]
    for (let i = 1 ; i < array.length ; i++ ){
        if(array[i] < min){
            min = array[i]
        }
    }
    console.log(min)
}

printTheSmallestNumber(numbers)


// sap xep tu be den lon

function sortNumbers(array) {
    if (!Array.isArray(array)) {
        console.log("The parameter passed in is not an array.")
        return
    }

    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length - 1; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
            }
        }
    }
    console.log(array)
}

sortNumbers(numbers)





