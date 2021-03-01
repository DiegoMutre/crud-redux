import Swal from "sweetalert2";
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
