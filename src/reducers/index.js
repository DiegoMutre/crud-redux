import { combineReducers } from "redux";
import alertsReducer from "./alertsReducer";
import productsReducer from "./productsReducer";

export default combineReducers({
    products: productsReducer,
    alert: alertsReducer,
});
