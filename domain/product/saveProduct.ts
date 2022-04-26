import { Product } from "./types";
import { ProductData } from "./data";

// save product in memory
const saveProduct = (productSaveImpl) => {
    return (productState: Product): Product => {
        try {
            const productData = productSaveImpl(productState);
            return ProductData(productData);
        } catch (err) {
            throw new Error(`Unable to save Product with id ${productState.id}`);
        }
    }
}

export {
    saveProduct,
};