export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES";
export const GET_SELECTED_COUNTRY = "GET_SELECTED_COUNTRY";

export const getCountries = () => dispatch => {
    dispatch({
        type: GET_ALL_COUNTRIES
    })
}

export const getSelectedCountry = ( countryName ) => dispatch => {
    dispatch({
        type: GET_SELECTED_COUNTRY,
        payload: countryName
    })
}
