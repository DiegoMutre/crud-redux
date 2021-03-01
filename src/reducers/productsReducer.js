import { ADD_PRODUCT, ADD_PRODUCT_SUCCESSFUL } from "../types";

// Each reducer have their own state
const initialState = {
    products: [],
    error: null,
    loading: false,
};

function productsReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                ...state,
                loading: action.payload,
            };
        case ADD_PRODUCT_SUCCESSFUL:
            return {
                ...state,
                products: [...state.products, action.payload],
            };
        default:
            return state;
    }
}

export default productsReducer;
