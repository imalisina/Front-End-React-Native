export const FETCH_COUNTRY_LISTS = "FETCH_COUNTRY_LISTS";
export const GET_SELECTED_COUNTRY = "GET_SELECTED_COUNTRY"; 

// Axios For API Call
import axios from "axios";


export const fetchCountryLists = () => async (dispatch) => {
    const response = await axios.get("https://restcountries.com/v2/all");
    dispatch({
        type: FETCH_COUNTRY_LISTS,
        payload: response.data
    });
};

export const getSelectedCountry = () => dispatch => {
}