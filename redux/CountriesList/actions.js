// Defined types
export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES";
export const GET_SELECTED_COUNTRY = "GET_SELECTED_COUNTRY";

/*
* Showing all available countries
*/
export const getCountries = () => dispatch => {
    dispatch({
        type: GET_ALL_COUNTRIES
    });
}

/*
* Getting and storing details of selected country
*/
export const getSelectedCountry = ( countryName ) => dispatch => {
    dispatch({
        type: GET_SELECTED_COUNTRY,
        payload: countryName
    });
}

