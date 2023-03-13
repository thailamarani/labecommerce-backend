export type acessUsers = {
    id: string,
    name?: string,
    email: string,
    password: string,
    createdAt?: string 
};

export type createUsers = {
    id: string,
    email: string,
    password: string
};

export enum Category {
    CLOTHES = "Roupas",
    SHOES = "Calçados",
    ACCESSORIES = "Acessórios"
}

export type products = {
    id: string,
    name: string,
    price: number,
    category: Category
};

export type purchases = {
    userId: string,
    productId: string,
    quantity: number,
    totalPrice: number
};