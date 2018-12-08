import { Dispatch } from 'redux';
import { connect } from "react-redux";
import Modal from './Modal';
import { hideModal, requestAddList, IActions } from '../actions'
import { IGlobalState } from "../global";
import * as moment from "moment";

const mapStateToProps = (state: IGlobalState) => ({
    targetDate: state.targetDate,
    visibleModal: state.visibleModal,
});

const mapDispatchToProps = (dispatch: Dispatch<IActions>) => ({
    onHideModal: (): void => {
        dispatch(hideModal());
    },
    onRequestAddList: (
        date: moment.Moment,
        time: moment.Moment,
        title: string
    ): void => {
        if(!time.isValid()) {
            alert('入力値が不正');
            return;
        }
        dispatch(requestAddList(date, time, title));
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Modal);
