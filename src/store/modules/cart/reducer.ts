import { Reducer } from "react";
import { Action } from "redux";
import { ICartState } from "./types";

const INITIAL_STATE: ICartState  = {
    items: []
}


const cart: Reducer<ICartState, Action> = () => {
    return INITIAL_STATE;
}

export default cart;