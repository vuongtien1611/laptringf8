interface ProductI{
    getName: () => string
    getPrice: () => number
    setName:(name: string) => void
    setPrice:(price: number) => void
}

class Product implements ProductI{
    private id: number
    private name: string
    private price: number

    constructor(id: number, name: string, price: number){
     this.id = id
     this.name = name
     this.price = price
    }

    public getName(){
        return this.name
    }
    public getPrice(){
        return this.price
    }
    public setName(name: string){
        this.name = name
    }
    public setPrice(price: number){
        this.price = price
    }
}

const iphone4: ProductI = new Product(1, "iphone4", 1000000)
const samsung: ProductI = new Product(2, "samsung", 1500000)

console.log(iphone4.getName(), iphone4.getPrice())
console.log(samsung)


iphone4.setPrice(10000000)
iphone4.setName("iphone5")
console.log(iphone4)



interface StoreI{
    getId: () => number
    getName: () => string
    getAddress: () => string
    setName:(name: string) => void
    setAddress:(address: string) => void

    addNewProduct: (product: ProductI) => void
    add
    removeProduct: (id: number) => void
    getProduct: () => ProductI[]
}










