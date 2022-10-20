import { TOGGLE_BOTTOM_SHEET } from "./actions";

const initialState = {
    toggleStatus: false
}

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