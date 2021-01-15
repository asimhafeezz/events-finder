import { EventI } from './action';
import { Action, ActionsTypes } from "./types";

export interface InitialStateI {
    events: EventI[],
    loading: boolean,
    allEvents: EventI[],
    event: EventI,
    countries: string[]
}

const initialState: InitialStateI = {
    events: [],
    loading: true,
    allEvents:[],
    event: {} as EventI,
    countries: []
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
        case ActionsTypes.fetchEventById: {
            return {
                ...state,
                event: action.payload
            }
        }
        case ActionsTypes.fetchAllCountries: {
            return {
                ...state,
                countries: action.payload
            }
        }
        default:
            return state
    }
}