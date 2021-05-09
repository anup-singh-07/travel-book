import React from 'react';

import HomeSection from '../../components/HomeSection/HomeSection.js';
import Cards from './HomeCards.js';
import Footer from '../../components/Footer/Footer.js';
import '../../App.css';

const home = props => {
    return(
        <div>
            <HomeSection />
            <Cards />
            <Footer />
        </div>
    )
}

export default home;