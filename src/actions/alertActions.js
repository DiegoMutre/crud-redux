import { HIDE_ALERT, SHOW_ALERT } from "../types";

export const showAlertAction = alert => dispatch =>
    dispatch({ type: SHOW_ALERT, payload: alert });

export const hideAlertAction = () => dispatch => dispatch({ type: HIDE_ALERT });
