import { axiosClient } from "../config/axios";
import {
    ADD_PRODUCT,
    ADD_PRODUCT_ERROR,
    ADD_PRODUCT_SUCCESSFUL,
} from "../types";

// Create new products
export const createNewProductAction = product => async dispatch => {
    dispatch({
        type: ADD_PRODUCT,
        payload: true,
    });

    try {
        await axiosClient.post("/", product);
        dispatch({
            type: ADD_PRODUCT_SUCCESSFUL,
            payload: product,
        });
    } catch (error) {
        dispatch({
            type: ADD_PRODUCT_ERROR,
            payload: true,
        });
    }
};
