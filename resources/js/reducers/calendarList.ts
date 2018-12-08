import { calendarListType } from "../global";
import { IActions } from "../actions";
import { ActionTypes } from "../actions/action-types";
import * as moment from "moment";

export const calendarList = (state: calendarListType = [], action: IActions) => {
    switch (action.type) {
        case ActionTypes.DRAW_LISTS:
            return action.payload.calendarList.map(item => ({
                id: item.id,
                target_date: moment(item.target_date),
                title: item.title,
            }));
        default:
            return state;
    }
};
