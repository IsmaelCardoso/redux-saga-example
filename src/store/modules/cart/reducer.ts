import { Reducer } from "react";
import { Action } from "redux";
import { ICartState, IProduct } from "./types";

const INITIAL_STATE: ICartState  = {
    items: []
}

interface payload {
   product: IProduct 
}
interface IAction extends Action {
    payload: payload;
}


const cart: Reducer<ICartState, IAction> = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case "ADD_PRODUCT_TO_CART": {
            const { product } = action.payload

            return {
                ...state,
                itens: [
                    ...state.items,
                    {
                        product,
                        quantity: 1,

                    }
                ]

            }
        }
        default: {
            return state;
        }
    }
}

export default cart;