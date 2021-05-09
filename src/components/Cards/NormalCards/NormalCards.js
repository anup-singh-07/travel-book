import React from 'react';

import './NormalCards.css';

const normalCard = props => {
    return (
        <div>
            <div className='cards'>
                <h1>{props.heading}</h1>
                <div className='cards__container'>
                    <div className='cards__wrapper'>
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default normalCard;
