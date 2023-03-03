"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.purchase = exports.product = exports.user = void 0;
exports.user = [
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
exports.product = [
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
exports.purchase = [
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
//# sourceMappingURL=database.js.map