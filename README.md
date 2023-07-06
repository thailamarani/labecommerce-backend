# Projeto labecommerce

### Conteúdos abordados
- NodeJS
- Typescript
- Express
- SQL e SQLite
- Knex
- Postman

## Banco de dados 🎲🎲

O banco de dados deve conter quatro tabelas:

## Tabela de Usuários: 
### Nome da Tabela:
- users
### Nome das colunas
- id
- name
- email
- password
- created_at

## Tabela de Produtos 🛒🛒
### Nome da Tabela:
- products
### Nome das colunas
- id 
- name
- price
- description
- image_url

### Tabela de Registro de Compras 💸💸

### Nome da Tabela:
- purchases
### Nome das colunas
- id 
- buyer
- total_price
- created_at

## Tabela de Registro de Produtos Comprados 🧾🧾
### Nome da Tabela:
purchases_products
### Nome das colunas
- purchase_id
- product_id
- quantity
--------------------------
<br>
-------------------

## Get all users
Retorna todas as pessoas cadastradas.<br>
Dica: atenção com o nome da propriedade createdAt! Ela deve vir em camelCase, apesar de estar em snake_case no banco de dados.
```typescript
// Request
// GET /users

// Response
// status 200 OK
[
    {
        id: "u001",
        name: "Fulano",
        email: "fulano@email.com",
        password: "fulano123",
        createdAt: "2023-01-15 09:12:42"
    },
    {
        id: "u002",
        name: "Ciclana",
        email: "ciclana@email.com",
        password: "ciclana99",
        createdAt: "2023-01-17 12:35:28"
    }
]
```

<br>

-------------------------
## Create user
Cadastra uma nova pessoa.
```typescript
// Request
// POST /users
// body JSON
{
    "id": "u003",
    "name": "Astrodev",
    "email": "astrodev@email.com",
    "password": "astrodev00"
}

// Response
// status 201 CREATED
{
    message: "Cadastro realizado com sucesso"
}
```
---------------
<br>

## Create product
Cadastra um novo produto.
```typescript
// Request
// POST /products
// body JSON
{
    "id": "prod003",
    "name": "Teclado gamer",
    "price": 200,
    "description": "Teclado mecânico com numpad",
    "imageUrl": "https://picsum.photos/seed/Teclado%20gamer/400"
}

// Response
// status 201 CREATED
{
    message: "Produto cadastrado com sucesso"
}
```

---------------------
<br>

## Get all products funcionalidade 1
Retorna todos os produtos cadastrados.
```typescript
// Request
// GET /products

// Response
// status 200 OK
[
    {
        id: "prod001",
        name: "Mouse gamer",
        price: 250,
        description: "Melhor mouse do mercado!",
        imageUrl: "https://picsum.photos/seed/Mouse%20gamer/400"
    },
    {
        id: "prod002",
        name: "Monitor",
        price: 900,
        description: "Monitor LED Full HD 24 polegadas",
        imageUrl: "https://picsum.photos/seed/Monitor/400"
    },
    {
        id: "prod003",
        name: "Teclado gamer",
        price: 200,
        description: "Teclado mecânico com numpad",
        imageUrl: "https://picsum.photos/seed/Teclado%20gamer/400"
    }
]
```

---------------------------
<br>

## Get all products funcionalidade 2
Caso seja enviada uma query params (name) deve ser retornado o resultado da busca de produtos que contenham o _"name"_ informado em seu nome.
```typescript
// Request
// query params = name
// GET /products?name=gamer

// Response
// status 200 OK
[
    {
        id: "prod001",
        name: "Mouse gamer",
        price: 250,
        description: "Melhor mouse do mercado!",
        imageUrl: "https://picsum.photos/seed/Mouse%20gamer/400"
    },
    {
        id: "prod003",
        name: "Teclado gamer",
        price: 200,
        description: "Teclado mecânico com numpad",
        imageUrl: "https://picsum.photos/seed/Teclado%20gamer/400"
    }
]
```

---------------------------
<br>

## Edit product by id
Edita um produto existente.
```typescript
// Request
// path params = :id

// PUT /products/prod003
// body JSON
{
    "id": "prod0033",
    "name": "Teclado gamer RGB",
    "price": 300,
    "description": "Teclado mecânico com RGB e numpad",
    "imageUrl": "https://picsum.photos/seed/Teclado%20gamer%20RGB/400"
}

// Response
// status 200 OK
{
    message: "Produto atualizado com sucesso"
}
```

---------------------------
<br>

## Create purchase
Cadastra um novo pedido. Como dica, o exercício 1 da aula de [Relações em SQL II](https://github.com/labenuexercicios/relacoes-sql-II-exercicios) é uma boa referência.
```typescript
// Request
// POST /purchases
// body JSON
{
    "id": "pur001",
    "buyer": "u001",
    "products": [
        {
            "id": "prod001",
            "quantity": 2
        },
        {
            "id": "prod002",
            "quantity": 1
        }
    ]
}

// Response
// status 201 CREATED
{
    message: "Pedido realizado com sucesso"
}
```


---------------------------
<br>

## Delete purchase by id
Deleta um pedido existente.
```typescript
// Request
// path params = :id
// DELETE /purchases/pur002

// Response
// status 200 OK
{
    message: "Pedido cancelado com sucesso"
}
```


---------------------------
<br>

## Get purchase by id
Retorna os dados de uma compra, incluindo a lista de produtos da mesma.
```typescript
// Request
// path params = :id
// GET /purchases/pur001

// Response
// status 200 OK
{
    purchaseId: "pur001",
    buyerId: "u001",
    buyerName: "Fulano",
    buyerEmail: "fulano@email.com",
    totalPrice: 1400,
    createdAt: "2023-01-15 16:24:54",
    products: [
        {
            id: "prod001",
            name: "Mouse gamer",
            price: 250,
            description: "Melhor mouse do mercado!",
            imageUrl: "https://picsum.photos/seed/Mouse%20gamer/400",
            quantity: 2
        },
        {
            id: "prod002",
            name: "Monitor",
            price: 900,
            description: "Monitor LED Full HD 24 polegadas",
            imageUrl: "https://picsum.photos/seed/Monitor/400",
            quantity: 1
        }
    ]
}
```


---------------------------
<br>