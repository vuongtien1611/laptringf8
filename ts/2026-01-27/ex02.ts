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

    speaking(){
        super.speaking() // => goi speaking trong Animal
        console.log('gau gau')
    }
    doSomething(){
        this.going()
        this.speaking()
        console.log('do something')
    }
}

const dog: Dog = new Dog()

dog.speaking()
console.log('----------------')
dog.doSomething()