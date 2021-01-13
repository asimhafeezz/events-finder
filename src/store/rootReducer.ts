import { combineReducers } from 'redux'
import { reducer as eventsReducer } from './events/reducer'
// import { reducer as utilsReducer } from './utils/reducer'


export const rootReducer = combineReducers({
    events: eventsReducer,
    // utils: utilsReducer
})

export type StoreStateT = ReturnType<typeof rootReducer>