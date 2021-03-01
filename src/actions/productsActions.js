import Swal from "sweetalert2";
import { axiosClient } from "../config/axios";
import {
    ADD_PRODUCT,
    ADD_PRODUCT_ERROR,
    ADD_PRODUCT_SUCCESSFUL,
    DOWNLOAD_PRODUCTS,
    DOWNLOAD_PRODUCTS_ERROR,
    DOWNLOAD_PRODUCTS_SUCCESSFUL,
} from "../types";

// Create new products
export const createNewProductAction = product => async dispatch => {
    dispatch({
        type: ADD_PRODUCT,
        payload: true,
    });

    try {
        const res = await axiosClient.post("/", product);
        dispatch({
            type: ADD_PRODUCT_SUCCESSFUL,
            payload: res.data,
        });
        Swal.fire("Correct", "Product was successfully added", "success");
    } catch (error) {
        dispatch({
            type: ADD_PRODUCT_ERROR,
            payload: true,
        });
        Swal.fire({
            icon: "error",
            title: "There was a mistake",
            text: "There was a mistake, try again",
        });
    }
};

export const getProductsAction = () => async dispatch => {
    dispatch({
        type: DOWNLOAD_PRODUCTS,
        payload: true,
    });

    try {
        const res = await axiosClient.get("/");
        dispatch({
            type: DOWNLOAD_PRODUCTS_SUCCESSFUL,
            payload: res.data,
        });
    } catch (error) {
        dispatch({
            type: DOWNLOAD_PRODUCTS_ERROR,
            payload: true,
        });
    }
};
