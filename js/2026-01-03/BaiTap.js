let height = 12
let weight = 20

let BMI = weight / height ^ 2

if(BMI < 18.5){
    console.log("Gầy")
}
else if(BMI >= 18.5 && BMI <= 24.9){
    console.log("Binh Thuong")
}
else{
    console.log("Thua Can")
}


//---------------bai 2---------------------//

let number =12
    if(number / 2 === 0 && number / 3 === 0){
        console.log("day la so chan va chia het cho 3")
    }
    else{
        console.log("khong phai so chan va chia het cho 3")
    }



    //----------------bai 3---------------------//


let age =12
    if (age < 12){
        console.log("tre em")
    }
    else if(age >= 12 && age <= 25 ){
        console.log("Thanh nien")
    }
    else if(age >= 25 && age <= 65){
        console.log("Truong thanh")
    }
    else{
        console.log("Nguoi gia")
    }
