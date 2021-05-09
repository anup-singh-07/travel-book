import React from 'react';
import { Link } from 'react-router-dom';

import './NavigationItem.css';

const navigationItem = props => (
    <li className='nav-item'>
        <Link 
            to={props.pathname} 
            className={props.className}
            onClick={props.onclick}
            >{props.children}</Link>
    </li>
);

export default navigationItem;