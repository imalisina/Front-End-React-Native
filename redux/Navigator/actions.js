// Defined types
export const STORE_NAVIGATION_PROP = "STORE_NAVIGATION_PROP";

/*
* Storing navigation status for welcome page
*/
export const storeNavigationProp = ( navigationProp ) => dispatch => {
    dispatch({
        type: STORE_NAVIGATION_PROP,
        payload: navigationProp
    });
}