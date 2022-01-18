import {combineReducers, createStore} from "redux";
import reducer from "./reducers"
import { composeWithDevTools } from 'redux-devtools-extension';



const rootReducers = combineReducers(reducer)

export const store = createStore(rootReducers,  composeWithDevTools())


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch