import React from 'react';
const imageDisplay = props => (
    <div>
        <img
            className={props.className}
            src={props.src}
            alt={'image: ' + props.src} />
        <h2 className='centered' style={props.style}>{props.h1}</h2>
        <h2 className='price'>{props.h2}</h2>
        <h2 className='price'>{props.h3}</h2>
        {props.children}
    </div>
);

export default imageDisplay;