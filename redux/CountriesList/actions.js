export const FETCH_COUNTRY_LISTS = "FETCH_COUNTRY_LISTS";

// Axios For API Call
import axios from "axios";


export const fetchCountryLists = () => async (dispatch) => {
    const response = await axios.get("https://restcountries.com/v2/all");
    dispatch({
        type: FETCH_COUNTRY_LISTS,
        payload: response.data
    });
};