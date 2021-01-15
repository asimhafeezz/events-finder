import { combineReducers } from 'redux'
import { reducer as eventsReducer } from './events/reducer'

export const rootReducer = combineReducers({
	events: eventsReducer,
})

export type StoreStateT = ReturnType<typeof rootReducer>
