import React, { useState } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../Store/actions/index.js';
import { Button } from '../../../components/UI/Buttons/Buttons.js';
import {
    mumbai, maldives, goa, gokarna, chennai, daman, laksha, andaman, puri
} from '../../../assets/index.js';
import Card from '../../../components/Cards/NormalCards/NormalCard/NormalCard.js';
import Cards from '../../../components/Cards/NormalCards/NormalCards.js';

const Oceans = props => {
    const [showMore, setShowMore] = useState(false);
    const [modal, setModal] = useState(false);
    const showHandler = () => setShowMore(!showMore);
    const showModal = () => setModal(state => true);
    const setPackage = (price, duration, place) => {
        props.setPackage(price, duration, place, modal);
    }
    React.useEffect(() => {showModal()},[modal])
    return (
        <div>
            <Cards heading='Life Is Always Better At The Beach'>
                <ul className='cards__items'>
                    <Card image={mumbai}
                        text='Once you have lived in Mumbai, no other city is good enough'
                        stay='Stay: 2 Days 1 Night'
                        pay='Pay: Rs. 5000'
                        label='Mumbai'
                        clicked={() => setPackage(5000, '2 Days 1 Night', 'mumbai')} />
                    <Card image={maldives}
                        text='On Earth, There is no heaven, But there are pieces of it.'
                        stay='Stay: 3 Days 2 Night'
                        pay='Pay: Rs. 18000'
                        label='Maldives' clicked={() => setPackage(18000, '3 Days 2 Night', 'maldives')} />
                    <Card image={daman}
                        text='The tranquillity is what symbolises the beach.'
                        stay='Stay: 2 Days 1 Night'
                        pay='Pay: Rs. 3000'
                        label='Daman & Diu' clicked={() => setPackage(3000, '2 Days 1 Night', 'daman')} />
                </ul>
                <ul className='cards__items'>
                    <Card image={laksha}
                        text='Lakshadweep - A Potpourri of Tropical Delights.'
                        stay='2 Days 1 Night'
                        pay='Pay: Rs. 5000'
                        label='Lakshadweep' clicked={() => setPackage(5000, '2 Days 1 Night', 'laksha')} />
                    <Card image={chennai}
                        text='The city smells of culture, coffee and coast.'
                        stay='Stay: 3 Days 3 Night'
                        pay='Pay: Rs. 3000'
                        label='Chennai' clicked={() => setPackage(3000, '3 Days 3 Nights','chennai')} />
                    <Card image={puri}
                        text=' Enjoy the golden sand and soothing sun bath.'
                        stay='Stay: 3 Days 4 Night'
                        pay='Pay: Rs. 3000'
                        label='Puri' clicked={() => setPackage(3000, '3 Days 4 Nights', 'puri')} />
                </ul>
                {showMore ? (
                    <div>
                        <ul className='cards__items'>
                            <Card image={goa}
                                text='Cool breeze, Adventure in your soul - Goa is calling.'
                                stay='2 Days 2 Night'
                                pay='Pay: Rs. 5000'
                                label='Goa' clicked={() => setPackage(5000, '2 Days 2 Nights','goa')} />
                            <Card image={gokarna}
                                text='Want a peaceful vaccation covered with idyllic beach & pristine water?'
                                stay='Stay: 2 Days 1 Night'
                                pay='Pay: Rs. 3000'
                                label='Gokarna' clicked={() => setPackage(3000, '2 Days 1 Night','gokarna')} />
                            <Card image={andaman}
                                text='Visit the island and enjoy the beauty of creation of God.'
                                stay='Stay: 2 Days 1 Night'
                                pay='Pay: Rs. 8000'
                                label='Andaman & Nicobar Island ' clicked={() => setPackage(8000, '2 Days 1 Night', 'andaman')} />
                        </ul>
                        <Button onClick={showHandler} buttonStyle='btn--blue'>Show Less <i className="fas fa-angle-up"></i></Button>
                    </div>
                )
                    : <Button onClick={showHandler} buttonStyle='btn--blue'>Show More <i className="fas fa-angle-down" /></Button>}
            </Cards>
            <hr style={{ border: '1px solid black', marginBottom: '20px', marginTop: '0' }} />
        </div>
    );
}
const mapDispatchToProps = dispatch => {
    return {
        setPackage: (price, duration, place, modal) => dispatch(actions.booking(price, duration, place, modal))
    }
}

export default connect(null, mapDispatchToProps)(Oceans);