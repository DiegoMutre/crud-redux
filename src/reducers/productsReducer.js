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

// Each reducer have their own state
const initialState = {
    products: [],
    error: null,
    loading: false,
    productToEdit: null,
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
        case UPDATE_PRODUCT_ERROR:
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
        case GET_PRODUCT_TO_EDIT:
            return {
                ...state,
                productToEdit: action.payload,
            };
        case UPDATE_PRODUCT_SUCCESSFUL:
            return {
                ...state,
                products: state.products.map(product =>
                    product.id === action.payload.id ? action.payload : product
                ),
            };
        default:
            return state;
    }
}

export default productsReducer;
