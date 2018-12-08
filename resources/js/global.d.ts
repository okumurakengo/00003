import * as moment from 'moment'
import { ModalDisplayEnum } from "./enum";

export type calendarListType = Array<{
    "id": number,
    "target_date": moment.Moment,
    "title": string,
}>;
export type targetDateType = moment.Moment;
export type selectWeekNumType = number;

export interface IGlobalState {
    calendarList: calendarListType
    targetDate: targetDateType
    selectWeekNum: selectWeekNumType
    visibleModal: ModalDisplayEnum
}
