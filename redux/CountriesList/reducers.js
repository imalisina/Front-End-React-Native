import { SET_COUNTRY_DATA } from './actions';

const initialState = {
    countryData: {},
}

const countryDataReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case SET_COUNTRY_DATA:
            return state;
        default:
            return state;
    }
}

export default countryDataReducer;