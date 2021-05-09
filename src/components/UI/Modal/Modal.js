import React from 'react';

import Backdrop from '../Backdrop/Backdrop.js';
import './Modal.css';

const modal = props => (
    <React.Fragment>
        <Backdrop show={props.show} clicked={props.modalClosed}/>
        <div
            className='Modal'
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}>
            {props.children}
        </div>
    </React.Fragment>
)

export default React.memo(modal, (prevProps, nextProps) =>
    nextProps.show === prevProps.show &&
    nextProps.children === prevProps.children
);