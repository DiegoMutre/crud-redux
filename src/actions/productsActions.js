import { ADD_PRODUCT, ADD_PRODUCT_SUCCESSFUL } from "../types";

// Create new products
export const createNewProductAction = product => dispatch => {
    dispatch({
        type: ADD_PRODUCT,
        payload: true,
    });
    dispatch({
        type: ADD_PRODUCT_SUCCESSFUL,
        payload: product,
    });
};
