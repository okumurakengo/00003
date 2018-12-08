import * as React from 'react';
import * as moment from 'moment'
import 'moment/locale/ja';
import * as $ from 'jquery';
import 'bootstrap';
import { ModalDisplayEnum } from "../enum";
import { targetDateType } from "../global";

interface IProps {
    targetDate: targetDateType
    visibleModal: ModalDisplayEnum
    onHideModal(): void
    onRequestAddList(date: moment.Moment, time: moment.Moment, title: string): void
}

export default class Modal extends React.Component<IProps> {
    private modalRef: React.RefObject<HTMLDivElement>;
    private timeRef: React.RefObject<HTMLInputElement>;
    private titleRef: React.RefObject<HTMLInputElement>;

    constructor(props: IProps) {
        super(props);
    }


    shouldComponentUpdate({ visibleModal }: { visibleModal: ModalDisplayEnum }): boolean {
        $(this.modalRef.current).modal(visibleModal);

        if(visibleModal === ModalDisplayEnum.HIDE) {
            this.timeRef.current.value = '';
            this.titleRef.current.value = '';
        }

        return true;
    }

    render() {
        const { targetDate, onHideModal, onRequestAddList } = this.props;
        return (
            <div
                className="modal"
                role="dialog"
                data-backdrop="static"
                ref={this.modalRef = React.createRef()}
                onClick={onHideModal}
            >
                <div className="modal-dialog" role="document" onClick={e => e.stopPropagation()}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">予定を入力</h5>
                            <button type="button" className="close" onClick={onHideModal}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    {moment(targetDate).format('LL')}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="plan-time" className="col-form-label">時間</label>
                                    <input type="time" className="form-control" name="time" id="plan-time" ref={this.timeRef = React.createRef()} />
                                    <label htmlFor="plan-text" className="col-form-label">内容</label>
                                    <input type="text" className="form-control" name="title" id="plan-text" ref={this.titleRef = React.createRef()} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={onHideModal}>Close</button>
                            <button type="button" className="btn btn-primary" onClick={() => onRequestAddList(
                                targetDate,
                                moment(this.timeRef.current.value, "HH:mm"),
                                this.titleRef.current.value
                            )}>
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
