import { GET_ALL_COUNTRIES } from './actions';

import Countries from '../../static/countries';

const initialState = {
    countryData: Countries,
}

const countryDataReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case GET_ALL_COUNTRIES:
            return state;
        default:
            return state;
    }
}

export default countryDataReducer;