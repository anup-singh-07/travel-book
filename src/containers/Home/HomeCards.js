import React from 'react';

import {
    img1, img2, img3, img4, img5
} from '../../assets/index.js';
import NormalCards from '../../components/Cards/NormalCards/NormalCards.js';
import NormalCard from '../../components/Cards/NormalCards/NormalCard/NormalCard.js';

const homeCards = props => {
    return (
        <div>
            <NormalCards heading='Check out these EPIC Destinations!'>
                <ul className='cards__items'>
                    <NormalCard image={img1}
                        text='Explore the hidden waterfall deep inside the amazon jungle'
                        label='Adventure'
                        path='/services'
                        home='true' />
                    <NormalCard image={img2}
                        text='Travel through the Islands of Bali in a Private Cruise'
                        label='Adventure'
                        path='/services'
                        home='true' />
                </ul>
                <ul className='cards__items'>
                    <NormalCard image={img3}
                        text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                        label='Adventure'
                        path='/services'
                        home='true' />
                    <NormalCard image={img4}
                        text='Experience Football on Top of the Himilayan Mountains'
                        label='Adventure'
                        path='/services'
                        home='true' />
                    <NormalCard image={img5}
                        text='Ride through the Sahara Desert on a guided camel tour'
                        label='Adventure'
                        path='/services'
                        home='true' />
                </ul>
            </NormalCards>
        </div>
    );
}

export default homeCards;