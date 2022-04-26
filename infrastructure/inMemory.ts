import { getProductOfId as createGetProductOfId } from '../domain/product/getProductOfId';
import { saveProduct as createSaveProduct } from '../domain/product/saveProduct'

const getProductOfId = inMemoryDatabase => {
    return createGetProductOfId(productId => inMemoryDatabase[productId]);
}

const saveProduct = inMemoryDatabase => {
    return createSaveProduct(productState => {
        return inMemoryDatabase[productState.id] = productState
    });
}

export {
    getProductOfId,
    saveProduct,
};