import { updateShipUseCaseHandler } from './application/updateShipUseCaseHandler'
import { updateShipUseCaseHandlerArguments } from './domain/product/types';

const MyVeryUsefulProject = ({ getProductOfId, saveProduct }: updateShipUseCaseHandlerArguments) => {
    return {
        updateShip: updateShipUseCaseHandler({ getProductOfId, saveProduct }),
    }
};

export {
    MyVeryUsefulProject,
}