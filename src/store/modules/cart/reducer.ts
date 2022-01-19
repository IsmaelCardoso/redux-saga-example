import { Reducer } from "react";
import Produce from 'immer';
import { ICartState } from "./types";

const INITIAL_STATE: ICartState  = {
    items: []
}

const cart: Reducer<ICartState, any> = (state = INITIAL_STATE, action) => {
    return Produce(state, draft => {
        switch(action.type) {
            case "ADD_PRODUCT_TO_CART_SUCCESS": {
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
            case "ADD_PRODUCT_TO_CART_FAILURE": {
                console.log("FAILURE", action.payload)
                break;
            }
            default: {
                return state;
            }
        }
    })
}

export default cart;