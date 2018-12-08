import { MouseEvent } from 'react';
import { Dispatch } from 'redux';
import { connect } from "react-redux";
import DateBtn from './DateBtn';
import { requestGetList, selectWeek, IActions } from '../actions'

const mapDispatchToProps = (dispatch: Dispatch<IActions>) => ({
    onSelectWeek: (e: MouseEvent<HTMLElement>, prevOrNext: -1 | 1): void => {
        dispatch(selectWeek(prevOrNext));
        dispatch(requestGetList());
    }
});

export default connect(
    () => ({}),
    mapDispatchToProps
)(DateBtn);
