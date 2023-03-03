export type users = {
    id: string,
    email: string,
    password: string
};

export type products = {
    id: string,
    name: string,
    price: number,
    category: string
};

export type purchases = {
    userId: string,
    productId: string,
    quantity: number,
    totalPrice: number
};