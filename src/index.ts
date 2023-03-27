import { acessUser, createProduct, createPurchase, getAllProducts, getAllPurchasesFromUserId, getAllUsers, getProductById, product, purchase, queryProductsByName } from "./database";
import { Category, TAcessUsers, TCreateUsers, TProducts, TPurchases } from "./types";
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
    try{
       res.status(200).send(acessUser) 
    } catch(error) {
        console.log(error)
        if(res.statusCode === 200) {
            res.status(500)
        }
        res.send(error.message)
    }
    res.status(200).send(acessUser)
})

//getAllProducts
app.get('/products', (req: Request, res: Response) => {
    try{
        res.status(200).send(acessUser)
    } catch(error) {
        console.log(error)
        if(res.statusCode === 200) {
            res.status(500)
        }
        res.send(error.message)
    }
})

//searchProductByName
app.get('/products/search', (req: Request, res: Response) => {
    try{
        const q = req.query.q as string
        if(q.length <1) {
            res.status(400)
            throw new Error("'Query params' deve possuir pelo menos um caractere.")
        }
        const result = product.filter(product => product.name.toLowerCase().includes(q.toLowerCase()))
        res.status(200).send(result)
    } catch(error) {
        console.log(error)
        if(res.statusCode === 200) {
            res.status(500)
        }
        res.send(error.message)
    }
})

//createUser
app.post('/users', (req: Request, res: Response) => {
    try{
        const id = req.body.id as string
        const email = req.body.email as string
        const password = req.body.password as string

        if(!id){
            res.status(400)
            throw new Error("'id deve ser passado no body")
        }
        if(typeof id !== "string"){
            res.status(400)
            throw new Error("'id' deve ser do tipo 'string'")
        }
        if(!email){
            res.status(400)
            throw new Error("'email' deve ser passado no body")
        }
        if(typeof email !== "string"){
            res.status(400)
            throw new Error("'email' deve ser do tipo 'string'")
        }
        if(!password){
            res.status(400)
            throw new Error("'password' deve ser passado no body")
        }
        if(typeof password !== "string"){
            res.status(400);
            throw new Error("'password' deve ser do tipo 'string'")
        }
        
        const searchId = acessUser.find((user) => user.id === id)

        if(searchId){
            res.status(400)
            throw new Error("Já existe uma conta com esse id")
        }
        
        const searchEmail = acessUser.find((user) => user.email === email)
        
        if(searchEmail){
            res.status(400)
            throw new Error("Já existe uma conta com esse email")
        }
    
        const newUser: TCreateUsers = {
            id,
            email,
            password
        }

        acessUser.push(newUser);
        res.status(201).send("Usuário cadastrado com sucesso!")

    } catch(error)
    console.log(error)
    
    if(res.statusCode === 200){
        res.status(500)
      }
      res.send(error.message)    
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

//getProductById
app.get("/products/:id", (req: Request, res: Response) => {
    const id = req.params.id
    const result: TProducts = product.find(prod => prod.id === id)
    res.status(200).send(result)
})

//getUserPurchasesByUserId
app.get("/users/:id/purchases", (req: Request, res: Response) => {
    const id = req.params.id
    const result: TPurchases = purchase.find(card => card.userId === id)
    res.status(200).send(result)
})

//deleteUserById
app.delete("/users/:id", (req: Request, res: Response) => {
    const id = req.params.id
    const index = acessUser.findIndex((item) => item.id === id)
    console.log(index)
    res.status(200).send("User apagado com sucesso!")
})

//deleteProductById
app.delete("/products/:id", (req: Request, res: Response) => {
    const id = req.params.id
    const index = product.findIndex((prod) => prod.id === id)
    console.log(index)
    res.status(200).send("Produto apagado com sucesso!")
})

//editUserById
app.put("/users/:id", (req: Request, res: Response) => {
    const id = req.params.index

    const newEmail = req.body.email as string | undefined
    const newPassword = req.body.password as string | undefined

    const result: TAcessUsers = acessUser.find(acessUser => acessUser.id === id)

    if(result){
        result.email = newEmail || result.email
        result.password = newPassword || result.password
    }

    res.status(200).send("Cadastro atualizado com sucesso!")

})

//editProductById
app.put("/products/:id", (req: Request, res: Response) => {
    const id = req.params.index

    const newName = req.body.name as string | undefined
    const newPrice = req.body.price as number | undefined
    const newCategory = req.body.category as Category | undefined

    const result: TProducts = product.find(product => product.id === id)

    if(result){
        result.name = newName || result.name
        result.price = newPrice || result.price
        result.category = newCategory || result.category
    }

    res.status(200).send("Produto atualizado com sucesso!")

})