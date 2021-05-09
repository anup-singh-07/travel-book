import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem.js';
import './NavigationItems.css';

const navigationItems = props => {
    return (
        <ul className={props.checkClick ? 'nav-menu active' : 'nav-menu'}>
            <NavigationItem
                pathname='/home'
                className='nav-links'
                onclick={props.onclick}>
                Home
            </NavigationItem>
            <NavigationItem
                pathname='/products'
                className='nav-links'
                onclick={props.onClick}>
                Products
            </NavigationItem>
            <NavigationItem
                pathname='/services'
                className='nav-links'
                onclick={props.onClick}>
                Bookings
            </NavigationItem>
            <NavigationItem
                pathname='/sign-up'
                className='nav-links-mobile'
                onclick={props.onClick}>
                Sign Up
            </NavigationItem>
        </ul>
    )
};

export default navigationItems;