import { all, call, put, fork, take, select } from "redux-saga/effects";
import { ActionTypes } from "./actions/action-types";
import { fetchRequestGetList, fetchRequestAddList, fetchRequestDeleteList } from "./api";
import { hideModal, requestGetList, drawList } from "./actions";

function* handleRequestGetList() {
    while (true) {
        yield take(ActionTypes.REQUEST_GET_LIST);
        const { selectWeekNum }: { selectWeekNum: number } = yield select();
        const { calendarList } = yield call(fetchRequestGetList, selectWeekNum);
        yield put(drawList(calendarList));
    }
}

function* handleRequestAddList() {
    while (true) {
        const { payload } = yield take(ActionTypes.REQUEST_ADD_LIST);
        yield call(fetchRequestAddList, payload);
        yield put(hideModal());
        yield put(requestGetList());
    }
}

function* handleRequestDeleteList() {
    while (true) {
        const { payload } = yield take(ActionTypes.REQUEST_DELETE_LIST);
        yield call(fetchRequestDeleteList, payload);
        yield put(requestGetList());
    }
}

export default function* rootSaga() {
    yield all([
        handleRequestGetList(),
        handleRequestAddList(),
        handleRequestDeleteList(),
    ]);
}
