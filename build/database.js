"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllPurchasesFromUserId = exports.createPurchase = exports.purchase = exports.queryProductsByName = exports.getProductById = exports.getAllProducts = exports.createProduct = exports.product = exports.getAllUsers = exports.acessUser = void 0;
const types_1 = require("./types");
exports.acessUser = [
    {
        id: "003",
        name: "Marcia",
        email: "marcia@email.com",
        password: "marcia123",
        createdAt: "2023-04-03 09:12:42"
    },
    {
        id: "004",
        name: "Claudio",
        email: "claudio@email.com",
        password: "claudio123",
        createdAt: "2023-04-03 14:12:36"
    }
];
function createUser(id, email, password) {
    const newUser = { id, email, password };
    exports.acessUser.push(newUser);
    console.log("Cadastro realizado com sucesso!");
}
createUser("005", "user5@email.com", "senha123");
function getAllUsers() {
    console.log(exports.acessUser);
}
exports.getAllUsers = getAllUsers;
getAllUsers();
exports.product = [
    {
        id: "p010",
        name: "Chinelo",
        price: 10,
        category: types_1.Category.SHOES
    },
    {
        id: "p020",
        name: "Vestido",
        price: 5,
        category: types_1.Category.CLOTHES
    }
];
function createProduct(id, name, price, category) {
    const newProduct = { id, name, price, category };
    exports.product.push(newProduct);
    console.log("Produto criado com sucesso!");
}
exports.createProduct = createProduct;
function getAllProducts() {
    console.log(exports.product);
}
exports.getAllProducts = getAllProducts;
function getProductById(id) {
    exports.product.find((productf) => {
        if (productf.id === id) {
            return console.log(productf);
        }
    });
}
exports.getProductById = getProductById;
function queryProductsByName(q) {
    return exports.product.filter((prod) => prod.name.toLowerCase().includes(q.toLowerCase()));
}
exports.queryProductsByName = queryProductsByName;
exports.purchase = [
    {
        userId: "001",
        productId: "Chinelo",
        quantity: 2,
        totalPrice: 20
    },
    {
        userId: "002",
        productId: "Vestido",
        quantity: 1,
        totalPrice: 5
    }
];
function createPurchase(userId, productId, quantity, totalPrice) {
    exports.purchase.push({ userId, productId, quantity, totalPrice });
    return "Compra realizada com sucesso!";
}
exports.createPurchase = createPurchase;
function getAllPurchasesFromUserId(userIdToSearch) {
    return exports.purchase.filter((purchase) => purchase.userId === userIdToSearch);
}
exports.getAllPurchasesFromUserId = getAllPurchasesFromUserId;
//# sourceMappingURL=database.js.map