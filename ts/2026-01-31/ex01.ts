
interface ProductI {
    getName: () => string
    getPrice: () => number
    getId: () => number
    setName: (name: string) => void
    setPrice: (price: number) => void
    // doDiscount: () => void
}

class Product implements ProductI {
    private id: number
    private name: string
    private price: number
    constructor(id: number ,name: string, price: number) {
        this.id = id
        this.name = name
        this.price = price
    }

    getName(): string{
        return this.name
    }
    getPrice(): number{
        return this.price
    }
    getId(): number{
        return this.id
    }
    setName(name: string) {

        this.name = name
    }
    setPrice(price: number) {
        this.price = price
    }
   protected doDiscount(percent: number = 50){
        const newPrice = this.getPrice() * (100 - percent) / 100
        this.setPrice(newPrice)
    }
}

interface PhoneI extends ProductI {
    getBranch: () => string
    setBranch: (branch: string) => void
}


export class phone extends Product implements PhoneI {
    private branch: string

    constructor(id: number, name: string, price: number, branch: string) {
        super(id, name, price)
        this.branch = branch
        this.doDiscount(20)
    }

    getBranch(): string {
        return this.branch
    }

    setBranch(branch: string) {
        this.branch = branch
    }

     doDiscount(percent: number = 20) {
        super.doDiscount(percent)
    }

}

const iphone: PhoneI = new phone(1, 'iphone5', 3000000, 'apple')


console.log(iphone)