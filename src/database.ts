import { users, products, purchases } from "./types";

export const user: users [] = [
    {
        id: "001",
        email: "user1@email.com",
        password: "senha123"
    },
    {
        id: "002",
        email: "user2@email.com",
        password: "senha456"
    }
];

export const product: products [] = [
    {
        id: "p010",
        name: "melancia",
        price: 10,
        category: "frutas"
    },
    {
        id: "p020",
        name: "abobrinha",
        price: 5,
        category: "legumes"
    }
];

export const purchase: purchases [] = [
    {
        userId: "001",
        productId: "melancia",
        quantity: 2,
        totalPrice: 20
    },
    {
        userId: "002",
        productId: "abobrinha",
        quantity: 1,
        totalPrice: 5
    }
];

// const resultado = purchase.reduce((acc, current)=> acc + (current.quantity*current.totalPrice), 0)

// console.log(resultado)