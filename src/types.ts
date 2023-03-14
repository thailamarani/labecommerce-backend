export type TAcessUsers = {
    id: string,
    name?: string,
    email: string,
    password: string,
    createdAt?: string 
};

export type TCreateUsers = {
    id: string,
    email: string,
    password: string
};

export enum Category {
    CLOTHES = "Roupas",
    SHOES = "Calçados",
    ACCESSORIES = "Acessórios"
}

export type TProducts = {
    id: string,
    name: string,
    price: number,
    category: Category
};

export type TPurchases = {
    userId: string,
    productId: string,
    quantity: number,
    totalPrice: number
};