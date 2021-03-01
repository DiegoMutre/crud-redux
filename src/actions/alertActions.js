import { SHOW_ALERT } from "../types";

export const showAlertAction = alert => dispatch => {
    dispatch({ type: SHOW_ALERT, payload: alert });
};
