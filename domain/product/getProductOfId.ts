import { Product } from './types';
import { ProductData } from './data'

type ProductOfIdImplementation = {
    (productId: string): Product
}

const getProductOfId = (getProductOfIdImpl: ProductOfIdImplementation) => {
    return (productId: string): Product => {
        try {
            const productData = getProductOfIdImpl(productId);
            return ProductData(productData);
        } catch (err) {
            throw new Error(`Unable to retrieve Product with id ${productId}`);
        }
    }
}

/*
This function is used to build a concrete implementation, for example with an in-memory database :
const inMemoryProductDatabase = {
  product17: {
    id: 'product17',
    product: 'a product value',
    ship: 'a ship value',
    otherProperty: 1234,
  },
};
const getProductOfIdFromInMemoryDatabase = getProductOfId(productId => inMemoryProductDatabase[productId])
*/

export {
    getProductOfId,
}