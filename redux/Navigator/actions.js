export const STORE_NAVIGATION_PROP = "STORE_NAVIGATION_PROP";

export const storeNavigationProp = ( navigationProp ) => dispatch => {
    dispatch({
        type: STORE_NAVIGATION_PROP,
        payload: navigationProp
    });
}