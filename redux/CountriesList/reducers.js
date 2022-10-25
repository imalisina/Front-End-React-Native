import { GET_ALL_COUNTRIES, GET_SELECTED_COUNTRY } from './actions';

import Countries from '../../static/countries';

const initialState = {
    countryData: Countries,
    selectedCountryData: {},
}

const countryDataReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case GET_ALL_COUNTRIES:
            return state;
        case GET_SELECTED_COUNTRY:
            state.countryData.map(( country ) => {
                if (country.name === action.payload) {
                    state.selectedCountryData = country
                }
            })
            console.log(state.selectedCountryData)
            return {...state};
        default:
            return state;
    }
}

export default countryDataReducer;