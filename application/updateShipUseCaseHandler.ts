import { Product } from "../domain/product/types";
import { updateShip } from "../domain/product/behaviors";

const updateShipUseCaseHandler = ({ getProductOfId, saveProduct }) => {
    return ({ productId, ship }) => {
        if (typeof productId !== typeof '') {
            throw new TypeError('productId must be a string');
        }

        const productData: Product = getProductOfId(productId);

        const newProductData = updateShip({ productData, ship });

        saveProduct(newProductData);
    };
}

export {
    updateShipUseCaseHandler
}