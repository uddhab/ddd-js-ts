import type { Product } from './types';

const ProductData = ({ id, product, ship, otherProperty }: Product): Product => Object.freeze({
    id,
    product,
    ship,
    otherProperty
})

export {
    ProductData
}
