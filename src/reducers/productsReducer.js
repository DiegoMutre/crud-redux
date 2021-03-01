import {
    ADD_PRODUCT,
    ADD_PRODUCT_ERROR,
    ADD_PRODUCT_SUCCESSFUL,
    DELETE_PRODUCT_ERROR,
    DELETE_PRODUCT_SUCCESSFUL,
    DOWNLOAD_PRODUCTS,
    DOWNLOAD_PRODUCTS_ERROR,
    DOWNLOAD_PRODUCTS_SUCCESSFUL,
} from "../types";

// Each reducer have their own state
const initialState = {
    products: [],
    error: null,
    loading: false,
};

function productsReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_PRODUCT:
        case DOWNLOAD_PRODUCTS:
            return {
                ...state,
                loading: action.payload,
            };
        case ADD_PRODUCT_SUCCESSFUL:
            return {
                ...state,
                products: [...state.products, action.payload],
                loading: false,
            };
        case ADD_PRODUCT_ERROR:
        case DOWNLOAD_PRODUCTS_ERROR:
        case DELETE_PRODUCT_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case DOWNLOAD_PRODUCTS_SUCCESSFUL:
            return {
                ...state,
                loading: false,
                products: action.payload,
            };
        case DELETE_PRODUCT_SUCCESSFUL:
            return {
                ...state,
                products: state.products.filter(
                    product => product.id !== action.payload
                ),
            };
        default:
            return state;
    }
}

export default productsReducer;
