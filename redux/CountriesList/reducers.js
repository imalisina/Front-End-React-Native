import { FETCH_COUNTRY_LISTS } from './actions';

const initialState = {
    countryData: [],
}

const countryDataReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case FETCH_COUNTRY_LISTS:
            state.countryData = action.payload;
            return state;
        default:
            return state;
    }
}

export default countryDataReducer;