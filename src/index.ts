import { acessUser, createProduct, createPurchase, getAllProducts, getAllPurchasesFromUserId, getAllUsers, getProductById, product, purchase, queryProductsByName } from "./database";
import { Category, TAcessUsers, TCreateUsers, TProducts, TPurchases } from "./types";
import express, { Request, Response } from 'express';
import cors from 'cors';

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
        const { id, email, password }: TAcessUsers = req.body

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
    
        const newUser: TAcessUsers = {
            id,
            email,
            password
        }

        acessUser.push(newUser);
        res.status(201).send("Usuário cadastrado com sucesso!")

    } catch(error) {
       
    if(res.statusCode === 200){
        res.status(500)
      }
      res.send(error.message) 
    }   
})

//createProduct
app.post('/products', (req: Request, res: Response) => {
    try{
        const id = req.body.id as string
        const name = req.body.name as string
        const price = req.body.price as number
        const category = req.body.category as Category

        if(!id){
            res.status(400)
            throw new Error("'id' deve ser passado no body")
        }
      
        if(!name){
            res.status(400)
            throw new Error("'name' deve ser passado no body")
        }
      
        if(!price){
            res.status(400)
            throw new Error("'price' deve ser passado no body")
        }
      
        if(!category){
            res.status(400)
            throw new Error("'category' deve ser passado no body")
        }
      
        if(id !== undefined){
            if (typeof id !== "string"){
                res.status(400)
                throw new Error("'id' deve ser do tipo 'string'")
            }
        }
      
        if(name !== undefined){
            if(typeof name !== "string"){
                res.status(400)
                throw new Error("'name' deve ser do tipo 'string'")
            }
        }
      
        if(price !== undefined){
            if (typeof price !== "number") {
                res.status(400)
                throw new Error("'price' deve ser do tipo 'number'")
            }
          }

        if(category !== undefined){
            if(
                category !== Category.ACCESSORIES &&
                category !== Category.CLOTHES &&
                category !== Category.SHOES
            )

    {res.status(400)
        throw new Error(
        "'Category' deve ter um tipo válido: 'Acessórios', 'Roupas' ou 'Calçados'"
        )
    }
    }
  
    const searchId = product.find((product) => product.id === id)
        if(searchId){
        res.status(400)
        throw new Error("Já existe um produto cadastrado com esse 'id'")
    }

    const newProduct: TProducts = { id, name, price, category }
        product.push(newProduct);
        res.status(201).send("Produto cadastrado com sucesso!");
        } catch (error) {
        console.log(error);
        if (res.statusCode === 200) {
        res.status(500);
    }
    res.send(error.message);
    }
})    

//createPurchase
app.post("/purchases", (req: Request, res: Response) => {
    try{
      const{userId, productId, quantity, totalPrice}: TPurchases = req.body
  
    if(!userId){
        res.status(400)
        throw new Error("'userId' deve ser passado no body")
    }
    if(!productId){
        res.status(400)
        throw new Error("'productId' deve ser passado no body")
    }
    if(!quantity){
        res.status(400)
        throw new Error("'quantity' deve ser passado no body")
    }
    if(!totalPrice){
        res.status(400)
        throw new Error("'totalPrice' deve ser passado no body")
    }
    if(userId !== undefined){
        if (typeof userId !== "string"){
          res.status(400)
          throw new Error("'userId' deve ser do tipo 'string'")
        }
    }
    if(productId !== undefined){
        if (typeof productId !== "string"){
          res.status(400)
          throw new Error("'productId' deve ser do tipo 'string'")
        }
    }
    if(quantity !== undefined){
        if (typeof quantity !== "number"){
          res.status(400)
          throw new Error("'quantity' deve ser do tipo 'number'")
        }
    }
      if(totalPrice !== undefined){
        if(typeof totalPrice !== "number"){
          res.status(400)
          throw new Error("'totalPrice' deve ser do tipo 'number'")
        }
    }
    const searchUserId = acessUser.find((user) => user.id === userId)
    if(!searchUserId){
        res.status(404)
        throw new Error(
          "'userId' deve corresponder à 'id' de um usuário cadastrado"
        )
    }
    const searchProductId = product.find(
        (product) => product.id === productId
    )
    if(!searchProductId){
        res.status(400)
        throw new Error(
          "'productId' deve corresponder à 'id' de um produto cadastrado"
        )
    }
    if(searchProductId){
        if(searchProductId.price * quantity !== totalPrice){
          res.status(400)
          throw new Error(
            "O valor total da compra não corresponde ao valor do produto vezes a quantidade informada"
          );
        }
    }
    const newPurchase: TPurchases = { userId, productId, quantity, totalPrice }
    purchase.push(newPurchase)
    res.status(201).send("Compra realizada com sucesso!")
    } catch (error) {
      console.log(error);
      if (res.statusCode === 200) {
        res.status(500);
      }
      res.send(error.message);
    }
  })

//getProductById
app.get("/products/:id", (req: Request, res: Response) => {
    try{
        const id = req.params.id
        const result: TProducts = product.find(prod => prod.id === id)
        if(!result){
            res.status(404)
            throw new Error("Produto não existente. Verifique o 'id'")
        }
        res.status(200).send(result)
    } catch(error){
        console.log(error)
        if(res.statusCode === 200){
            res.status(500)
        }
        res.send(error.message)
    }
})

//getUserPurchasesByUserId
app.get("/users/:id/purchases", (req: Request, res: Response) => {
    try{
        const id = req.params.id
        const searchUserId = acessUser.find((user) => user.id === id)
        if(!searchUserId) {
            res.status(404)
            throw new Error("Usuário não existente. Verifique o 'id'")
    }

    const userPurchases = purchase.filter(
      (purchase) => purchase.userId === id
    )

    res.status(200).send(userPurchases)
    } catch (error){
        console.log(error)
        if (res.statusCode === 200){
        res.status(500)
        }
        res.send(error.message)
      }
})

//deleteUserById
app.delete("/users/:id", (req: Request, res: Response) => {
    try{
        const id = req.params.id
        const searchUserId = acessUser.find((user) => user.id === id)
        if(!searchUserId){
        res.status(404)
        throw new Error("Usuário não existente. Verifique o 'id'")
        }
        const index = acessUser.findIndex((user) => user.id === id)
        if(index){
        acessUser.splice(index, 1)
    }
        res.status(200).send("Usuário apagado com sucesso")
    } catch (error) {
        console.log(error)
        if (res.statusCode === 200) {
        res.status(500)
    }
        res.send(error.message)
    }
  })

//deleteProductById
app.delete("/products/:id", (req: Request, res: Response) => {
    try{
        const id = req.params.id
        const searchProduct = product.find(product => product.id === id)
        if(!searchProduct){
            res.status(404)
            throw new Error("Produto não existe. Verifique o 'id'")
    }
        const index = product.findIndex((product) => product.id === id)
        if (index){
        product.splice(index, 1)
    }
        res.status(200).send("Produto apagado com sucesso")
    } catch (error){
      console.log(error)
      if (res.statusCode === 200) {
        res.status(500)
      }
      res.send(error.message)
    }
})

//editUserById
app.put("/users/:id", (req: Request, res: Response) => {
    try{
        const id = req.params.id
        const newEmail = req.body.email
        const newPassword = req.body.password
   
        const searchUserId = acessUser.find((user) => user.id === id)
   
    if(!searchUserId){
        res.status(404)
        throw new Error("Usuário não existe. Verifique o 'id'")
    }
    if(newEmail !== undefined){
        if(typeof newEmail !== "string"){
            res.status(400)
            throw new Error("'email' deve ser do tipo 'string'")
        }
    }
    if(newPassword !== undefined){
         if(typeof newPassword !== "string"){
           res.status(400)
           throw new Error("'password' deve ser do tipo 'string'")
        }
    }

    const result = acessUser.find((user) => user.id === id)
    if(result){
       result.email = newEmail || result.email
       result.password = newPassword || result.password
    }
    res.status(200).send("Cadastro atualizado com sucesso")

    } catch(error){
    console.log(error)
    if(res.statusCode === 200){
        res.status(500)
    }
        res.send(error.message);
    }
})

//editProductById
app.put("/products/:id", (req: Request, res: Response) => {
    try{
        const id = req.params.id
        const newName = req.body.name
        const newPrice = req.body.price
        const newCategory = req.body.category
    
        const searchProduct = product.find(product => product.id === id)
    
        if(!searchProduct){
        res.status(404)
        throw new Error("Produto não encontrado. Verifique o 'id'")
        }
     
        if(newName !== undefined){
        if(typeof newName !== "string"){
            res.status(400)
            throw new Error("'name' deve ser do tipo 'string'")
        }
        }
        if(newPrice !== undefined){
        if(typeof newPrice !== "number"){
            res.status(400)
            throw new Error("'price' deve ser do tipo 'number'")
        }
        }
        if(newCategory !== undefined){
            if (
            newCategory !== Category.CLOTHES &&
            newCategory !== Category.SHOES &&
            newCategory !== Category.ACCESSORIES
        ){
            res.status(400)
            throw new Error(
            "'category' deve ter um tipo válido: 'Roupas', 'Calçados', 'Acessórios'"
        )
        }
        }
        const result = product.find((product) => product.id === id)
        if (result) {
            result.name = newName || result.name
            result.price = newPrice || result.price
            result.category = newCategory || result.category
        }
        res.status(200).send("Produto atualizado com sucesso")

    } catch(error){
        console.log(error)
        if (res.statusCode === 200) {
        res.status(500)
        }
        res.send(error.message)
        }
})