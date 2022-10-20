import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import toggleStatusReducer from './WelcomePageToggle/reducers';

const rootReducer = combineReducers({
    toggleStatusReducer
})

export const Store = createStore(rootReducer, applyMiddleware(thunk));