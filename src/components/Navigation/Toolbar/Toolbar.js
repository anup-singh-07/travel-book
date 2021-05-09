import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import NavigationItems from '../NavigationItems/NavigationItems.js';
import { Button } from '../../UI/Buttons/Buttons.js';
import './Toolbar.css';

const Toolbar = props => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const history = useHistory();

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }
    useEffect(() => {
        showButton()
    },[]);
    window.addEventListener('resize', showButton);

    const btnRedirect = () => {
        let path = '/sign-up';
        history.push(path);
    }

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    Let's TRAVEL
                <i className='fab fa-typo3' />
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <NavigationItems checkClick={click} onClick={closeMobileMenu} />
                {button && <Button 
                    className='btns' 
                    buttonSize='btn--medium' 
                    buttonStyle="btn--outline" 
                    onClick={btnRedirect}
                    style={{cursor: 'pointer'}}>Sign Up</Button>}
                {/* {button ? <Button buttonStyle='btn--outline'>Sign Up</Button>: null} */}
            </div>
        </nav>
    );
};

export default Toolbar;