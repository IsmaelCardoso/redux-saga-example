import { Reducer } from "react";
import { Action } from "redux";
import { ICartState } from "./types";

const INITIAL_STATE: ICartState  = {
    items: []
}


const cart: Reducer<ICartState, Action> = (state, action) => {
    console.log("state", state)
    console.log("action", action)

    return INITIAL_STATE;
}

export default cart;