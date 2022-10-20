import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import toggleStatusReducer from './WelcomePageToggle/reducers';
import countryDataReducer from "./CountriesList/reducers";

const rootReducer = combineReducers({
    toggleStatusReducer,
    countryDataReducer
})

export const Store = createStore(rootReducer, applyMiddleware(thunk));