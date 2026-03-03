interface ProductI {
    getId: () => number
    getName: () => string
    getPrice: () => number
    setName: (name: string) => void
    setPrice: (price: number) => void
}

interface CustomerI {
    getId: () => number
    getName: () => string
    setName: (name: string) => void
}

class Product implements ProductI {
    private id: number
    private name: string
    private price: number

    constructor(id: number, name: string, price: number) {
        this.id = id
        this.name = name
        this.price = price
    }

    setName(name: string) {
        this.name = name
    }

    setPrice(price: number){
        this.price = price
    }

    public getId() {
        return this.id
    }

    public getName() {
        return this.name
    }

    public getPrice() {
        return this.price
    }
}

const iphone4: ProductI = new Product(1, 'iphone4', 100)
const iphone5: ProductI = new Product(2, 'iphone5', 150)

console.log(iphone4)
console.log(iphone5)


