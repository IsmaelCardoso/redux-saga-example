import { Reducer } from "react";
import Produce from 'immer';
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


const cart: Reducer<ICartState, any> = (state = INITIAL_STATE, action) => {
    return Produce(state, draft => {
        switch(action.type) {
            case "ADD_PRODUCT_TO_CART": {
                const { product } = action.payload
            
                draft.items.push({
                    product,
                    quantity: 1,
            
                })

                break;
                
            }
            default: {
                return state;
            }
        }
    })
}

export default cart;