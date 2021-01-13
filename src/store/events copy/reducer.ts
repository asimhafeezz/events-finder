import { Action, ActionsTypes } from "./types";

export interface InitialStateI {
    openModal: boolean
}

const initialState: InitialStateI = {
    openModal: false
}

export const reducer = (state: InitialStateI = initialState , action: Action) => {
    switch(action.type){
        case ActionsTypes.setModal: {
            return {
                ...state,
                openModal: action.payload
            }
        }
        default:
            return state
    }
}