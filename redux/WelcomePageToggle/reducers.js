import { TOGGLE_BOTTOM_SHEET } from "./actions";

const initialState = {
    toggleStatus: true
}

const toggleStatusReducer = ( state=initialState, action ) => {
    switch ( action.type ) {
        case TOGGLE_BOTTOM_SHEET:
            state.toggleStatus = !state.toggleStatus
            console.log(state.toggleStatus)
            return state;
        default:
            return state;
    }
}

export default toggleStatusReducer;