import Swal from "sweetalert2";
import { axiosClient } from "../config/axios";
import {
    ADD_PRODUCT,
    ADD_PRODUCT_ERROR,
    ADD_PRODUCT_SUCCESSFUL,
    DELETE_PRODUCT_ERROR,
    DELETE_PRODUCT_SUCCESSFUL,
    DOWNLOAD_PRODUCTS,
    DOWNLOAD_PRODUCTS_ERROR,
    DOWNLOAD_PRODUCTS_SUCCESSFUL,
    GET_PRODUCT_TO_EDIT,
    UPDATE_PRODUCT_ERROR,
    UPDATE_PRODUCT_SUCCESSFUL,
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

export const deleteProductAction = id => async dispatch => {
    try {
        await axiosClient.delete(`/${id}`);
        dispatch({
            type: DELETE_PRODUCT_SUCCESSFUL,
            payload: id,
        });
    } catch (error) {
        dispatch({
            type: DELETE_PRODUCT_ERROR,
            payload: true,
        });
    }
};

export const getProductToEditAction = product => dispatch => {
    dispatch({
        type: GET_PRODUCT_TO_EDIT,
        payload: product,
    });
};

export const updateProduct = product => async dispatch => {
    try {
        const res = await axiosClient.put(`/${product.id}`, product);
        dispatch({
            type: UPDATE_PRODUCT_SUCCESSFUL,
            payload: res.data,
        });
    } catch (error) {
        dispatch({
            type: UPDATE_PRODUCT_ERROR,
            payload: true,
        });
    }
};
