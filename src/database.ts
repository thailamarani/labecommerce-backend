import { TAcessUsers, Category, TProducts, TPurchases } from "./types";

export const acessUser: TAcessUsers[] = [
    {
        id: "u001",
        name: "Marcia",
        email: "marcia@email.com",
        password: "marcia123",
        createdAt: "2023-04-03 09:12:42"
    },
    {
        id: "u002",
        name: "Claudio",
        email: "claudio@email.com",
        password: "claudio123",
        createdAt: "2023-04-03 14:12:36"
    }
];

function createUser (id: string, email: string, password: string){
    const newUser = {id, email, password}
    acessUser.push(newUser)
    console.log("Cadastro realizado com sucesso!")
}

// createUser("u003", "user003@email.com", "senha003")

export function getAllUsers (){
    console.log(acessUser)
}

getAllUsers()

export const product: TProducts [] = [
    {
        id: "p001",
        name: "Chinelo",
        price: 40,
        category: Category.SHOES
    },
    {
        id: "p002",
        name: "Vestido",
        price: 60,
        category: Category.CLOTHES
    }
];

export function createProduct (id: string, name: string, price: number, category: Category) {
    const newProduct : TProducts = {id, name, price, category}
    product.push(newProduct)
    console.log("Produto criado com sucesso!")
}

export function getAllProducts() : void {
    console.log(product)
}

export function getProductById (id: string) {
    product.find((productf) => {
        if (productf.id === id) {
            return console.log(productf)
        }
    })
}

export function queryProductsByName (q: string) : TProducts[]{
    return product.filter((prod) => prod.name.toLowerCase().includes(q.toLowerCase()))
}

export const purchase: TPurchases [] = [
    {
        userId: "u001",
        productId: "p001",
        quantity: 2,
        totalPrice: 20
    },
    {
        userId: "u002",
        productId: "p002",
        quantity: 1,
        totalPrice: 5
    }
];

export function createPurchase (userId: string, productId: string, quantity: number, totalPrice: number) : string{
    purchase.push({userId, productId, quantity, totalPrice})
    return "Compra realizada com sucesso!"
}

export function getAllPurchasesFromUserId (userIdToSearch: string) : TPurchases[] {
    return purchase.filter((purchase) => purchase.userId === userIdToSearch)
}

// const resultado = purchase.reduce((acc, current)=> acc + (current.quantity*current.totalPrice), 0)

// console.log(resultado)