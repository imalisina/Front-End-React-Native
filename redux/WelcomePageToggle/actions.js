// Defined types
export const TOGGLE_BOTTOM_SHEET = "TOGGLE_BOTTOM_SHEET";

/*
* Setting toggle status to whether display country modal or not
*/
export const setToggle = () => dispatch => {
    dispatch({
        type: TOGGLE_BOTTOM_SHEET,
    });
}