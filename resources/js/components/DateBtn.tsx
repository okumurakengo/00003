import * as React from 'react';

interface IProps {
    prevOrNext : -1 | 1
    children : string
    onSelectWeek(e: React.MouseEvent<HTMLElement>, prevOrNext: -1 | 1) : void
}

export default (({ prevOrNext, children, onSelectWeek }) => (
    <div className="p-2">
        <a href="#" className="btn btn-primary" onClick={e => onSelectWeek(e, prevOrNext)}>
            {children}
        </a>
    </div>
)) as React.FC<IProps>
