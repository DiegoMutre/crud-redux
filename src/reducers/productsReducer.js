// Each reducer have their own state
const initialState = {
    products: [],
    error: null,
    loading: false,
};

function productsReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}

export default productsReducer;
