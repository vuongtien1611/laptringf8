interface ProductI{
    getId: () => number
    getName: () => string
    getPrice: () => number
    setName: (name: string) => void
    setPrice: (price: number) => void
}


class Product implements ProductI{
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

console.log('------------Product-------------')

const iphone4: ProductI = new Product(1, 'iPhone4', 1000000)
const iphone5: ProductI = new Product(2, 'iPhone5', 1500000)
console.log(iphone4)
console.log(iphone5)

console.log('-------------End-Product-------------')


interface CustomerI{
    getId: () => number
    getName: () => string
    setName: (name: string) => void
    receiveMsg: (msg: string) => void
}

class Customer implements CustomerI{
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

console.log("-------------Customer-------------")
const customer1: CustomerI = new Customer(1, 'anh Cuong')
const customer2: CustomerI = new Customer(2, 'anh Ha')


console.log(customer1)
console.log(customer2)

console.log('-------------End-Customer-------------')

interface StoreI{
    getId: () => number
    getName: () => string
    getAddress: () => string
    setName: (name: string) => void
    setAddress: (address: string) => void

    addNewProduct: (product: ProductI) => void
    getProducts: () => ProductI[]
    deleteProduct: (ProductId: number) => void

    getCustomer: () => CustomerI[]
    addNewCustomer: (Customer: CustomerI) => void
    deleteCustomer: (CustomerId: number) => void

    sendNoti: (msg: string) => void
}





class Store implements StoreI{

    private id: number
    private name: string
    private address: string
    private products: ProductI[] = []
    private customers: CustomerI[] = []

    constructor(id: number, name: string, address: string) {
        this.id = id
        this.name = name
        this.address = address
    }
    getName(){
        return this.name
    }
    setName(name: string){
        this.name = name
    }
    getId(){
        return this.id
    }

    getAddress(){
        return this.address
    }

    setAddress(address: string){
        this.address = address
    }
    addNewProduct(product: ProductI){
        this.products.push(product)
        this.sendNoti(`${product.getName()} ve roi anh em oi`)
    }

    getProducts(): ProductI[]{
        return this.products
    }
    deleteProduct(ProductId: number){
        const curProduct: ProductI[] = this.getProducts()  // lay danh sach san pham hien tai
        const index = curProduct.findIndex(product => product.getId() === ProductId)

        if(index === -1){   // kiem tra xem product nay co ton tai khong
            throw new Error((`product ${ProductId} not found`))
        }
        curProduct.splice(index, 1) // xoa san pham tu danh sach
        this.products = curProduct // cap nhat lai danh sach san pham
    }




    getCustomer(): CustomerI[]{
        return this.customers
    }
    addNewCustomer(Customer: CustomerI){
        this.customers.push(Customer)
    }
    deleteCustomer(CustomerId: number) {
        const curCustomer: CustomerI[] = this.getCustomer()
        const index = curCustomer.findIndex(customer => customer.getId() === CustomerId)
        if(index === -1){
            throw new Error(`customer ${CustomerId} not found`)
        }

        curCustomer.splice(index, 1)
        this.customers = curCustomer
    }
    sendNoti(msg: string){
        const customers: CustomerI[] =this.getCustomer()
        customers.forEach(customer => customer.receiveMsg(msg))
    }

}


const store = new Store(1, "Tech Store", "123 Nguyen Trai")

console.log(store.getId())       // 1
console.log(store.getName())     // Tech Store
console.log(store.getAddress())  // 123 Nguyen Trai

//------------------------------------------

store.setName("Super Tech Store")
store.setAddress("456 Le Loi")

console.log(store.getName())     // Super Tech Store
console.log(store.getAddress())  // 456 Le Loi

//------------------------------------------

const c1 = new Customer(1, "Nam")
const c2 = new Customer(2, "Binh")

store.addNewCustomer(c1)
store.addNewCustomer(c2)
console.log(store.getCustomer().length) // 2


