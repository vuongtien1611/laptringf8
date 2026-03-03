import {ProductI} from "../product";
import {CustomerServiceI} from "../Customer";

export interface StoreI{
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





export class Store implements StoreI{

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

