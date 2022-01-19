import { all, takeLatest, select } from 'redux-saga/effects'
import { IState } from '../..';
import { addProductToCartRequest } from './action';

type CheckProductStockRequest = ReturnType<typeof addProductToCartRequest>

function* checkProductStock ({ payload }: CheckProductStockRequest) {
    const { product } = payload;

    const currentQuantity: number = yield select((state: IState) => {
        return state.cart.items.find(item => item.product.id === product.id)?.quantity ?? 0 
        /**
         * ?.quantity é o valor a ser retornado caso a condição seja verdadeira
         * "?? 0" = "|| 0" é a mesma coisa, será retornado caso a condição for falsa
         */
    })
}

export default all([
    takeLatest("ADD_PRODUCT_TO_CART_REQUEST", checkProductStock),
]);