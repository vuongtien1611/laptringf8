// f(x) = a * x^2 + bx + c

const a = 6
const b = 6
const c = 1


 function delta (a,b,c){

     const  d = b * b - 4*a*c

     if(d> 0){
         const x1 = (-b + Math.sqrt(d)) / (2*a)
         const x2 = (-b - Math.sqrt(d)) / (2*a)
         console.log(x1,x2)
     }

     else if(d === 0){
         const x = -b / (2*a)
         console.log(x)
     }

     else{
         console.log("Khong co nghiem thuc")
     }
}

delta(1,-5,6)

