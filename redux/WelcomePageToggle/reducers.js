// Types & actions
import { TOGGLE_BOTTOM_SHEET } from "./actions";

// Default values
const initialState = {
    toggleStatus: false
}

// Reducer
const toggleStatusReducer = ( state=initialState, action ) => {
    switch ( action.type ) {
        case TOGGLE_BOTTOM_SHEET:
            state.toggleStatus = !state.toggleStatus
            return {...state};
        default:
            return state;
    }
}

export default toggleStatusReducer;