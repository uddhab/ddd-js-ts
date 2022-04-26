import type { Product, UpdateShip } from './types';

import { ProductData } from './data';

const updateShip = ({ productData, ship }: UpdateShip): Product => {
    if (typeof ship !== typeof '') {
        throw new Error('ship should be a valid string');
    }

    if (typeof productData === typeof Promise) {
        throw new Error('productData should be a valid object');
    }

    return ProductData({
        ...productData,
        ship,
        otherProperty: ship.indexOf('?') === -1 ? productData.otherProperty : 42,
    });
}

export {
    updateShip,
}