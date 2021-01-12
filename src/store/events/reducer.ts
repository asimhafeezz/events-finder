import { EventI } from './action';
import { Action, ActionsTypes } from "./types";

export interface InitialStateI {
    events: EventI[],
    loading: boolean
}

const initialState: InitialStateI = {
    events: [],
    loading: true
}

export const reducer = (state: InitialStateI = initialState , action: Action) => {
    switch(action.type){
        case ActionsTypes.fetchEvents: {
            return {
                ...state,
                events: action.payload
            }
        }
        case ActionsTypes.setLoading: {
            return {
                ...state,
                loading: action.payload
            }
        }
        default:
            return state
    }
}