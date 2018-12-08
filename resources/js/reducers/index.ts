import { combineReducers } from "redux";
import { visibleModal } from "./visibleModal";
import { targetDate } from "./targetDate";
import { calendarList } from "./calendarList";
import { selectWeekNum } from "./selectWeekNum";

export default combineReducers({
    visibleModal,
    targetDate,
    calendarList,
    selectWeekNum,
});
