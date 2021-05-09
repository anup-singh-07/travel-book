import React from 'react';

import './Input.css';

const input = props => <input
    name={props.name}
    type={props.type}
    className={props.classname}
    placeholder={props.placeholder}
    onChange={props.onChange} />

export default input;