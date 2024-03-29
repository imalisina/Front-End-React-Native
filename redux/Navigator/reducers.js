// Types & actions
import { STORE_NAVIGATION_PROP } from './actions';

// Default values
const initialState = {
    navigationProperty: {}, 
}

// Reducer
const navigatorReducer = ( state = initialState, action ) => {
    switch( action.type ){
        case STORE_NAVIGATION_PROP:
            state.navigationProperty = action.payload;
        default:
            return {...state}
    }
};

export default navigatorReducer;