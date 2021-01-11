import { combineReducers } from 'redux'
import { reducer as eventsReducer } from './events/reducer'

// export interface StoreStateI {
    
// }

export const rootReducer = combineReducers({
    todos: eventsReducer
})