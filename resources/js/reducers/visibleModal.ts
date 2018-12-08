import { IActions } from "../actions";
import { ModalDisplayEnum } from "../enum";
import { ActionTypes } from "../actions/action-types";

export const visibleModal = (state: ModalDisplayEnum = ModalDisplayEnum.HIDE, action: IActions) => {
    switch (action.type) {
        case ActionTypes.SHOW_MODAL:
            return ModalDisplayEnum.SHOW;
        case ActionTypes.HIDE_MODAL:
            return ModalDisplayEnum.HIDE;
        default:
            return state;
    }
};
