import {Action} from 'redux'
import {ActionTypes} from "./action-types";
import * as moment from "moment";

interface IShowModal extends Action {
    type : ActionTypes.SHOW_MODAL
    payload: {
        date: moment.Moment
    }
}
export const showModal = (date: moment.Moment): IShowModal => ({
    type: ActionTypes.SHOW_MODAL,
    payload: { date }
});

interface IHideModal extends Action {
    type : ActionTypes.HIDE_MODAL
}
export const hideModal = (): IHideModal => ({
    type: ActionTypes.HIDE_MODAL,
});

interface IRequestGetList extends Action {
    type: ActionTypes.REQUEST_GET_LIST,
}
export const requestGetList = (): IRequestGetList => ({
    type: ActionTypes.REQUEST_GET_LIST,
});

interface IDrawList extends Action {
    type: ActionTypes.DRAW_LISTS
    payload: {
        calendarList: Array<{
            id: number,
            target_date: string,
            title: string,
        }>
    }
}
export const drawList = (calendarList: Array<{
    id: number,
    target_date: string,
    title: string,
}>): IDrawList => ({
    type: ActionTypes.DRAW_LISTS,
    payload: { calendarList }
});

interface ISelectWeek {
    type: ActionTypes.SELECT_WEEK,
    payload: { prevOrNext: -1 | 1 }
}
export const selectWeek = (prevOrNext: -1 | 1): ISelectWeek => ({
    type: ActionTypes.SELECT_WEEK,
    payload: { prevOrNext }
});

interface IRequestAddList extends Action {
    type: ActionTypes.REQUEST_ADD_LIST,
    payload : {
        date: moment.Moment,
        time: moment.Moment,
        title: string,
    }
}
export const requestAddList = (
    date: moment.Moment,
    time: moment.Moment,
    title: string
): IRequestAddList => ({
    type: ActionTypes.REQUEST_ADD_LIST,
    payload: { date, time, title }
});

interface IRequestDeleteList extends Action {
    type: ActionTypes.REQUEST_DELETE_LIST,
    payload : {
        id: number,
    }
}
export const requestDeleteList = (id: number): IRequestDeleteList => ({
    type: ActionTypes.REQUEST_DELETE_LIST,
    payload: { id }
});

export type IActions = IShowModal | IHideModal | IDrawList | ISelectWeek | IRequestGetList | IRequestAddList | IRequestDeleteList

