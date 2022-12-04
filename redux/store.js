import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// Reducer files
import toggleStatusReducer from './WelcomePageToggle/reducers';
import countryDataReducer from "./CountriesList/reducers";
import navigatorReducer from "./Navigator/reducers";

// Root reducer
const rootReducer = combineReducers({
    toggleStatusReducer,
    countryDataReducer,
    navigatorReducer
})

export const Store = createStore(rootReducer, applyMiddleware(thunk));