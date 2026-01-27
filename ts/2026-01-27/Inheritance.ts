interface AnimalI{
    id: number
    name: string

    going: () => void
    speaking: () => void

}

class Animal implements AnimalI{
    id: number
    name: string
    going(){
        console.log('going')
    }
    speaking(){
        console.log('speaking')
    }

}


class Dog extends Animal{
    // id: number
    // name: string
    // going(){
    //     console.log('going')
    // }
    // speaking(){
    //     console.log('speaking')
    // }
}

const dog = new Dog()

dog.speaking()