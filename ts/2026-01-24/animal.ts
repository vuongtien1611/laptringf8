export class Animal implements AnimalI {
    // arm: number
    // lag: number
    //
    // speaking(){
    //     console.log("Animal is speaking")
    // }
    //
    // going(){
    //     console.log("Animal is going")
    // }

    arm: number
    lag: number

    speaking() {
        return 'speaking'
    }

    going() {
        return 'going'
    }

}