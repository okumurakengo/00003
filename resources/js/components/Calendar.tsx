import * as React from 'react';
import * as moment from 'moment'
import 'moment/locale/ja';
import { range, partition } from 'lodash';
import DateBtn from './DateBtn.connect';
import { ModalDisplayEnum } from "../enum";
import { calendarListType, selectWeekNumType } from "../global";

export interface IProps {
    visibleModal : ModalDisplayEnum,
    calendarList : calendarListType,
    selectWeekNum : selectWeekNumType,
    onShowModal(e: React.MouseEvent<HTMLElement>, date: moment.Moment) : void,
    onRequestGetList() : void,
    onRequestDeleteList(e: React.MouseEvent<HTMLElement>, id: number) : void,
}

export default class Calendar extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);
    }

    componentDidMount() {
        this.props.onRequestGetList();
    }

    render() {
        const { calendarList, selectWeekNum, onShowModal, onRequestDeleteList } = this.props;

        let currentList: calendarListType;
        let nextList : calendarListType = calendarList;
        let date: moment.Moment = moment().add(7 * selectWeekNum, 'day').startOf('week');

        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="d-flex justify-content-between">
                            <DateBtn prevOrNext={-1}>Prev Week</DateBtn>
                            <DateBtn prevOrNext={ 1}>Next Week</DateBtn>
                        </div>
                        {range(7).map((i: number) => {
                            [currentList, nextList] = partition(nextList, item => item.target_date.isSame(date.clone().add(i, 'day'), 'day'));
                            return(
                                <div className="card" key={i}>
                                    <div className="card-header d-flex justify-content-between">
                                        <div className="p-1">
                                            <h5>{date.clone().add(i, 'day').format('【ddd】 LL')}</h5>
                                        </div>
                                        <div className="p-1">
                                            <a href="#" className="card-link"
                                               onClick={e => onShowModal(e, date.clone().add(i, 'day'))}>New</a>
                                        </div>
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        {currentList.map(item => (
                                            <li className="list-group-item" key={item.id}>
                                                <a href="#" className="card-link" onClick={e => onRequestDeleteList(e, item.id)}>[x]</a>
                                                <span className="font-weight-bold pl-1">{item.target_date.format('HH:mm')}</span>
                                                <span className="font-weight-normal pl-3">{item.title}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    }
}
