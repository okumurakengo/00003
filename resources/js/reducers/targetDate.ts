import { IActions } from "../actions";
import { ActionTypes } from "../actions/action-types";
import { targetDateType } from "../global";

export const targetDate = (state: targetDateType = null, action: IActions) => {
    switch (action.type) {
        case ActionTypes.SHOW_MODAL:
            return action.payload.date;
        case ActionTypes.HIDE_MODAL:
            return null;
        default:
            return state;
    }
};
