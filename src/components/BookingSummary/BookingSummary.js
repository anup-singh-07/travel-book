import React from 'react';

import SummaryImage from './SummaryImage/SummaryImage.js';
const summary = props => {
    
    return (
        <React.Fragment>
            <h2 style={{textAlign: 'center', color: '#0040ff'}}>Your Booking:</h2>
            <SummaryImage 
                pics={props.place} 
                price={props.price}
                duration={props.stay}/>
            {/* {photo(props.place)} */}
        </React.Fragment>
    );
}

export default summary;