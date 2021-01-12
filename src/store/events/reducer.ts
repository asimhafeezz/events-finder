import { EventI } from './action';
import { Action, ActionsTypes } from "./types";

export interface InitialStateI {
    events: EventI[]
}

const initialState: InitialStateI = {
    events: []
}

export const reducer = (state: InitialStateI = initialState , action: Action) => {
    switch(action.type){
        case ActionsTypes.fetchEvents: {
            return {
                ...state,
                events: action.payload
            }
        }
        default:
            return state
    }
}