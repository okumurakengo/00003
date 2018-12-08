import * as React from 'react';
import Calendar from './Calendar.connect';
import Modal from './Modal.connect';

export default (() => (
    <div>
        <Calendar />
        <Modal />
    </div>
)) as React.FC;
