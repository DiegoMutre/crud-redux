import { SHOW_ALERT } from "../types";

const initialState = {
    alert: null,
};

const alertsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_ALERT:
            return {
                ...state,
                alert: action.payload,
            };
        default:
            return state;
    }
};

export default alertsReducer;
