import React from 'react';

import { Button } from '../../components/UI/Buttons/Buttons.js';
import video1 from '../../assets/Videos/video-1.mp4';
import '../../App.css';
import './HomeSection.css';

const homeSection = props => {
    return (
        <div className='homeSection'>
            <video src={video1} autoPlay loop muted />
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className="homeButtons">
                <Button 
                    classname="btn" 
                    buttonStyle="btn--outline" 
                    buttonSize="btn--large">
                        GET STARTED
                    </Button>
                <Button
                    classname="btn"
                    buttonSize="btn--large"
                    buttonStyle="btn--primary">
                        WATCH TRAILER <i className="far fa-play-circle"/>
                    </Button>
            </div>
        </div>
    );
}

export default homeSection;