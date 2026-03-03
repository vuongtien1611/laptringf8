export interface ProductI{
    getId: () => number
    getName: () => string
    getPrice: () => number
    setName: (name: string) => void
    setPrice: (price: number) => void
}


export class Product implements ProductI{
    private id: number
    private name: string
    private price: number
    constructor(id: number, name: string, price: number) {
        this.id = id
        this.name = name
        this.price = price
    }


    getId(){
        return this.id
    }
    getName(){
        return this.name
    }
    getPrice(){
        return this.price
    }
    setName(name: string){
        this.name = name
    }
    setPrice(price: number){
        this.price = price
    }

}