import { ActionsTypes, IProduct } from "./types";

export const addProductToCartRequest = (product: IProduct) => {
    return {
        type: ActionsTypes.ADD_PRODUCT_TO_CART_REQUEST,
        payload: { 
            product 
        },
    }
}   

export const addProductToCartSuccess = (product: IProduct) => {
    return {
        type: ActionsTypes.ADD_PRODUCT_TO_CART_SUCCESS,
        payload: { 
            product 
        },
    }
}   

export const addProductToCartFailure = (productId: number) => {
    return {
        type: ActionsTypes.ADD_PRODUCT_TO_CART_FAILURE,
        payload: { 
            productId 
        },
    }
}   