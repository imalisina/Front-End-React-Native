export const SET_COUNTRY_DATA = "SET_COUNTRY_DATA";

export const setCountry = countryData => dispatch => {
    dispatch({
        type: SET_COUNTRY_DATA,
        payload: countryData,
    })
};