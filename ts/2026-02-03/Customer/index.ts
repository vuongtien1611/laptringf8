export interface CustomerServiceI{
    getId: () => number
    getName: () => string
    setName: (name: string) => void
    receiveMsg: (msg: string) => void
}

export class Customer implements CustomerServiceI{
    private id: number
    private name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }

    getName() {
        return this.name
    }
    setName(name: string) {
        this.name = name
    }
    receiveMsg(msg: string){
        console.log(`Customer ${this.getName()} have received the message: ${msg}`)
    }
    getId(){
        return this.id
    }
}