import { Action, ActionsTypes } from "./types";

export const reducer = (state: any = [] , action: Action) => {
    switch(action.type){
        case ActionsTypes.fetchEvents: {
            return action.payload
        }
        default:
            return state
    }
}