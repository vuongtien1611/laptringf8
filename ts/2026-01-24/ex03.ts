

interface AnimalI{
    arm: number
    lag: number
    speaking:() => void
    going: () => void
    
    setArm: (arm: number) => void
    setLag: (lag: number) => void
}

class Animal implements AnimalI{
    arm: number
    lag: number
    speaking (){
        return 'speaking'
    }
    going () {
        return 'going'
    }
    setArm (arm: number) {
        console.log(arm)
    }
    setLag (lag: number) {
        console.log(lag)
    }

}


const animal = new Animal()
animal.going()
animal.setArm(10)
animal.setLag(10)

console.log(animal.speaking())



class Dog implements AnimalI{
    arm: number = 2
    lag: number = 2
    speaking (){
        return 'Gau Gau'
    }
    going (){
        return '4 legs'
    }
    setArm (arm: number) {
        console.log(arm)
    }
    setLag (lag: number) {
        console.log(lag)
    }
}

const dog = new Dog()
dog.setArm(10)
dog.setLag(10)
console.log(dog.speaking())