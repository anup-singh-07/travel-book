import React from 'react';

import { Button } from '../Buttons/Buttons.js';
import {
    fb, gp, tw
} from '../../../assets/index.js';
import './Form.css';

const form = props => {
    return (
        <div>
            <div className='container'>
                <div className='form-box'>
                    <div className='button-box'>
                        <div className='logButton' style={props.toggleStyle}></div>
                        <Button type='button' classname='toggle-btn' style={props.loginToggle} onClick={props.setLogin}>Log In</Button>
                        <Button type='button' classname='toggle-btn' style={props.signupToggle} onClick={props.setRegister}>Sign Up</Button>
                    </div>
                    <div className='social-icons'>
                        <img className='image' src={fb} alt='facebook' />
                        <img className='image' src={gp} alt='google' />
                        <img className='image' src={tw} alt='twitter' />
                    </div>
                    <form className={`input-group ${props.auth}`} style={props.loginSliderStyle} onSubmit={props.onSubmit}>
                        {props.children}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default form;