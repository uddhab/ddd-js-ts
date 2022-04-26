import { getProductOfId, saveProduct } from "../infrastructure/inMemory";

import { MyVeryUsefulProject } from "..";

describe('Feature: updating ship', () => {
    test('then the product object with id product1 should have its ship value set to "some new value"', () => {
        const inMemoryDatabase = {
            product1: {
                id: 'product1',
                ship: 'initial ship value',
                otherProperty: 0
            }
        };
        const myVeryUsefulProject = MyVeryUsefulProject({
            getProductOfId: getProductOfId(inMemoryDatabase),
            saveProduct: saveProduct(inMemoryDatabase),
        });
        myVeryUsefulProject.updateShip({ productId: 'product1', ship: 'some new value' });
        expect(inMemoryDatabase.product1.ship).toBe('some new value');
    });

    test('then the product object with id product1 should have its ship value set to "some other value ?" and its otherProperty value set to 42', () => {
        const inMemoryDatabase = {
            product1: {
                id: 'product1',
                ship: 'initial ship value',
                otherProperty: 0
            }
        };
        const myVeryUsefulProject = MyVeryUsefulProject({
            getProductOfId: getProductOfId(inMemoryDatabase),
            saveProduct: saveProduct(inMemoryDatabase),
        });
        myVeryUsefulProject.updateShip({ productId: 'product1', ship: 'some other value ?' });
        expect(inMemoryDatabase.product1.ship).toBe('some other value ?');
        expect(inMemoryDatabase.product1.otherProperty).toBe(42);
    });
});
