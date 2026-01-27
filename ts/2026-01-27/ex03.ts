// interface AnimalI{
//     id: number
//     name: string
//     going: () => void
//     speaking: () => void
//
// }

abstract class Animal{
    id: number
    name: "number"
   abstract going(): void  // abstract method
    speaking(){
        console.log('speaking')
    }
}

class Dog extends Animal{
    speacking(){
        super.speaking()
        console.log('gau gau')
    }
    going(){
        console.log('going')
    }
    doSomething(){
        this.going()
        this.speacking()
        console.log('do something')
    }
}










