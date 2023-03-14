import { acessUser, createProduct, createPurchase, getAllProducts, getAllPurchasesFromUserId, getAllUsers, getProductById, product, purchase, queryProductsByName } from "./database";
import { Category, TCreateUsers, TProducts, TPurchases } from "./types";
import express, { Request, Response } from 'express'
import cors from 'cors'

// console.log(user);
// console.log(product);
// console.log(purchase);

// getAllUsers()
// createProduct("040", "tênis", 10, Category.SHOES)
// getAllProducts()
// getProductById("040")

// console.log(queryProductsByName("Chinelo"));
// console.log(createPurchase("007", "Crocs", 2, 20))
// console.log(getAllPurchasesFromUserId("002"))

// exercícios APIs e Express
const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003")
})

app.get('/ping', (req: Request, res: Response) => {
    res.send('Pong!')
})

//getAllUsers
app.get('/users', (req: Request, res: Response) => {
    res.status(200).send(acessUser)
})

//getAllProducts
app.get('/products', (req: Request, res: Response) => {
    res.status(200).send(product)
})

//searchProductByName
app.get('/products/search', (req: Request, res: Response) => {
    const q = req.query.q as string

    const result = product.filter(product => product.name.toLowerCase().includes(q.toLowerCase()))

    res.status(200).send(result)
})

//createUser
app.post('/users', (req: Request, res: Response) => {
    const id = req.body.id as string
    const email = req.body.email as string
    const password = req.body.password as string

    const newUser: TCreateUsers = {
        id,
        email,
        password
    }

    acessUser.push(newUser)
    res
    .status(201)
    .send("Cadastro realizado com sucesso!")
})

//createProduct
app.post('/products', (req: Request, res: Response) => {
    const id = req.body.id as string
    const name = req.body.name as string
    const price = req.body.price as number
    const category = req.body.category as Category

    const newProduct: TProducts = {
        id,
        name,
        price,
        category
    }

    product.push(newProduct)
    res
    .status(201)
    .send("Produto cadastrado com sucesso!")
})

//createPurchase
app.post('/purchases', (req: Request, res: Response) => {
    const userId = req.body.userId as string
    const productId = req.body.productId as string
    const quantity = req.body.quantity as number
    const totalPrice = req.body.totalPrice as number
    
    const newPurchase: TPurchases = {
        userId,
        productId,
        quantity,
        totalPrice
    }

    purchase.push(newPurchase)
    res
    .status(201)
    .send("Compra realizada com sucesso!")
})