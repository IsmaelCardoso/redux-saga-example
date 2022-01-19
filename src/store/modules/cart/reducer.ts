import { Reducer } from "react";
import Produce from 'immer';
import { ActionsTypes, ICartState } from "./types";

const INITIAL_STATE: ICartState  = {
    items: [],
    failedStockCheck: [],
}

const cart: Reducer<ICartState, any> = (state = INITIAL_STATE, action) => {
    return Produce(state, draft => {
        switch(action.type) {
            case ActionsTypes.ADD_PRODUCT_TO_CART_SUCCESS: {
                const { product } = action.payload

                const productInCartIndex = draft.items.findIndex(item => item.product.id === product.id)

                if(productInCartIndex >= 0) {
                    draft.items[productInCartIndex].quantity++
                } else {
                    draft.items.push({
                        product,
                        quantity: 1,
                
                    })
                }
                break;
            }
            case ActionsTypes.ADD_PRODUCT_TO_CART_FAILURE: {
                const { productId } = action.payload

                draft.failedStockCheck.push(productId)
                break;
            }
            default: {
                return state;
            }
        }
    })
}

export default cart;