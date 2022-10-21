export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES";

export const getCountries = () => dispatch => {
    dispatch({
        type: GET_ALL_COUNTRIES
    })
}
