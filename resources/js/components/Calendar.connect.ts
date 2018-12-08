import { MouseEvent } from 'react';
import { Dispatch } from 'redux';
import { connect } from "react-redux";
import Calendar from './Calendar';
import { showModal, requestGetList, requestDeleteList, IActions } from '../actions'
import { IGlobalState } from "../global";
import * as moment from "moment";

const mapStateToProps = (state: IGlobalState) => ({
    visibleModal: state.visibleModal,
    calendarList: state.calendarList,
    selectWeekNum: state.selectWeekNum,
});

const mapDispatchToProps = (dispatch: Dispatch<IActions>) => ({
    onShowModal: (e: MouseEvent<HTMLElement>, date: moment.Moment): void => {
        e.preventDefault();
        dispatch(showModal(date));
    },
    onRequestGetList: (): void => {
        dispatch(requestGetList());
    },
    onRequestDeleteList: (e: MouseEvent<HTMLElement>, id: number): void => {
        e.preventDefault();
        if (!confirm('削除しますか？')) return;
        dispatch(requestDeleteList(id));
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Calendar);
