import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import toggleStatusReducer from './WelcomePage/reducers';

const rootReducer = combineReducers({
    toggleStatusReducer
})

export const Store = createStore(rootReducer, applyMiddleware(thunk));