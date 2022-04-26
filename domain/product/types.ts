export type Product = {
    id: string,
    product: string,
    ship: string,
    otherProperty: number
}

export type UpdateShip = {
    productData: Product,
    ship: string,
}

export type updateShipUseCaseHandlerArguments = {
    getProductOfId: (productId: string) => Product,
    saveProduct: (productData: Product) => Product,
}