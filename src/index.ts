import { acessUser, createProduct, createPurchase, getAllProducts, getAllPurchasesFromUserId, getAllUsers, getProductById, product, purchase, queryProductsByName } from "./database";
import { Category } from "./types";

// console.log(user);
// console.log(product);
// console.log(purchase);

// getAllUsers()
// createProduct("040", "tênis", 10, Category.SHOES)
// getAllProducts()
// getProductById("040")

// console.log(queryProductsByName("Chinelo"));
console.log(createPurchase("007", "Crocs", 2, 20))
console.log(getAllPurchasesFromUserId("002"))