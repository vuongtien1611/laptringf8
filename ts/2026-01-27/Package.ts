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
    receiveMsg: (msg: string) => void
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


interface StoreI {
    getId: () => number
    getName: () => string
    getAddress: () => string
    setName: (name: string) => void
    setAddress: (address: string) => void

    addNewProduct: (product: ProductI) => void
    getProducts: () => ProductI[]
    deleteProduct: (productId: number) => void

    getCustomers: () => CustomerI[]
    addNewCustomer: (customer: CustomerI) => void
    deleteCustomer: (cstId: number) => void

    sendNoti: () => void
}

class Store implements StoreI {
    sendNoti: () => void
    getId: () => number
    getName: () => string
    getAddress: () => string
    setName: (name: string) => void
    setAddress: (address: string) => void
    addNewProduct: (product: ProductI) => void
    getProducts: () => ProductI[]
    deleteProduct: (productId: number) => void
    getCustomers: () => CustomerI[]
    addNewCustomer: (customer: CustomerI) => void
    deleteCustomer: (cstId: number) => void
}


class Customer implements CustomerI {
    private id: number
    private name: string
    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }


    getId(): number{
        return this.id
    }
    getName (): string{
        return this.name
    }
    setName(name: string) {
        this.name = name
    }
}

const customer1: CustomerI = new Customer(1, 'John')
const customer2: CustomerI = new Customer(2, 'Jane')
const customer3: CustomerI = new Customer(3, 'Jack')


class Store implements StoreI {
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

    getCustomers: () => CustomerI[]
    addNewCustomer: (customer: CustomerI) => void
    deleteCustomer: (cstId: number) => void
    sendNoti: () => void
    getId(): number{
        return this.id
    }
    getName (): string{
        return this.name
    }
    getAddress (): string{
        return this.address
    }
    setName(name: string) {
        this.name = name
    }
    setAddress(address: string) {
        this.address = address
    }
    addNewProduct(product: ProductI) {
        this.products.push(product)
    }
    getProducts(): ProductI[] {
        return this.products
    }
    deleteProduct(productId: number): void {
        const curProducts: ProductI[] = this.getProducts()

        const index = curProducts.findIndex(
            (p: ProductI) => p.getId() === productId
        )

        if (index === -1) {
            throw new Error(`Product ${productId} not found`)
        }

        curProducts.splice(index, 1)
        this.products = curProducts
    }

    getCustomer(): CustomerI[]{
        return this.customers
    }
    addNewCustomer(customer: CustomerI){
        this.customers.push(customer)
    }

    senNoti(){
        const customers = this.getCustomers()
        customers.forEach(customer => {
            customer.receviveMsg(Msg)
        })
    }

}



const store1: StoreI = new Store(1, 'store1', '123 street')





/*
* store co the
*   them sp
*   lay sp
*   them kh
*   lay kh
*   thong bao cho KH biet khi co san pham moi ve
* */

// interface UserI {
//   getPassword
// }









