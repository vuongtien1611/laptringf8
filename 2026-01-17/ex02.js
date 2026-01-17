const a = [1, 4, 6, 9]
const b = [2, 3, 4, 5, 8]

/*
* merge a and b to sortedNumbers
* ex sortedNumbers = [1, 2, 3, 4, 4, 5, 6, 8, 9]
* */

let i = 0, j = 0

const sortedNumbers = []

while (i < a.length && j < b.length){
    if(a[i] <= b[j]){
        sortedNumbers.push(a[i])
        i++
    }
    else{
        sortedNumbers.push(b[j])
        j++
    }
}


for(let idx = i; idx < a.length; idx++){
    sortedNumbers.push(a[idx])
}

for(let idx = j; idx < b.length; idx++){
    sortedNumbers.push(b[idx])
}



console.log(sortedNumbers)
