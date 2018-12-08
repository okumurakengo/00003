import { selectWeekNumType } from "../global";
import { IActions } from "../actions";
import { ActionTypes } from "../actions/action-types";

export const selectWeekNum = (state: selectWeekNumType = 0, action: IActions) => {
    switch (action.type) {
        case ActionTypes.SELECT_WEEK:
            return state + action.payload.prevOrNext;
        default:
            return state;
    }
};
