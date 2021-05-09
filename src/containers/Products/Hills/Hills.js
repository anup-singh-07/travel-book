import React, { useState } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../Store/actions/index.js';
import {
    mussoorie, tawang, darjeeling, gangtok, gulmarg, chamba, shillong, manali, leh
} from '../../../assets/index.js'
import Card from '../../../components/Cards/NormalCards/NormalCard/NormalCard.js'
import Cards from '../../../components/Cards/NormalCards/NormalCards.js';
import { Button } from '../../../components/UI/Buttons/Buttons.js';

const Hills = props => {
    const [showMore, setShowMore] = useState(false);
    const [modal, setModal] = useState(false);
    const showHandler = props => { setShowMore(!showMore); }
    const showModal = () => setModal(state => true)
    const setPackage = (price, duration, place) => {
        props.setPackage(price, duration, place, modal);
    }
    React.useEffect(()=> {
        showModal();
    },[modal])
    return (
        <div>
            <Cards heading="Mountains are the soul's fuel" cursive='true'>
                <ul className='cards__items'>
                    <Card image={manali}
                        text='Talk like Manali. Cold to the body but warm to the soul.'
                        stay='Stay: 2 Days 2 Night'
                        pay='Pay: Rs. 5000'
                        label='Manali'
                        clicked={() => {setPackage(5000, '2 Days 2 Nights', 'manali')}
                        } />
                    <Card image={mussoorie}
                        text='Want to talk with queen? Come here and meet queen of hills.'
                        stay='Stay: 3 Days 2 Night'
                        pay='Pay: Rs. 7000'
                        label='Mussoorie'
                        clicked={() => setPackage(7000, '3 Days 2 Nights', 'mussoorie')} />
                    <Card image={gangtok}
                        text='God rebooted the whole world and a piece of peace came here.'
                        stay='Stay: 2 Days 2 Night'
                        pay='Pay: Rs. 7000'
                        label='Gangtok'
                        clicked={() => setPackage(7000, '2 Days 2 Nights', 'gangtok')} />
                </ul>
                <ul className='cards__items'>
                    <Card image={tawang}
                        text='Tawang Monastery - The spiritual wonder of India.'
                        stay='2 Days 1 Night'
                        pay='Pay: Rs. 3000'
                        label='Tawang'
                        clicked={() => setPackage(3000, '2 Days 1 Night', 'tawang')} />
                    <Card image={leh}
                        text='When exploring leh-ladakh, be traveller not tourist.'
                        stay='Stay: 3 Days 2 Night'
                        pay='Pay: Rs. 8000'
                        label='Leh-Ladakh'
                        clicked={() => setPackage(8000, '3 Days 2 Nights', 'leh')} />
                    <Card image={chamba}
                        text=' No network needed, connect with your soul with strong network.'
                        stay='Stay: 3 Days 2 Night'
                        pay='Pay: Rs. 3000'
                        label='Chamba'
                        clicked={() => setPackage(3000, '3 Days 2 Nights', 'chamba')} />
                </ul>
                {showMore ? (
                    <div>
                        <ul className='cards__items'>
                            <Card image={gulmarg}
                                text='If there is heaven on earth, here it is.'
                                stay='2 Days 2 Night'
                                pay='Pay: Rs. 5000'
                                label='Gulmarg'
                                clicked={() => setPackage(5000, '2 Days 2 Nights', 'gulmarg')} />
                            <Card image={shillong}
                                text='Scotland of East - land of charming scenario & breath taking waterfall'
                                stay='Stay: 3 Days 2 Night'
                                pay='Pay: Rs. 6000'
                                label='Shillong'
                                clicked={() => setPackage(6000, '3 Days 2 Nights', 'shillong')} />
                            <Card image={darjeeling}
                                text='Leave your bed tea nd come to feel the gardens of tea "Darjeeling"'
                                stay='Stay: 3 Days 3 Night'
                                pay='Pay: Rs. 5000'
                                label='Darjeeling'
                                clicked={() => setPackage(5000, '3 Days 3 Nights', 'darjeeling')} />
                        </ul>
                        <Button onClick={showHandler} buttonStyle='btn--blue'>Show Less <i className="fas fa-angle-up"></i></Button>
                    </div>
                )
                    : <Button onClick={showHandler} buttonStyle='btn--blue'>Show More <i className="fas fa-angle-down" /></Button>}
            </Cards>
            <hr style={{ border: '1px solid black', marginBottom: '20px', marginTop: '0' }} />
        </div>
    )
}
const mapDispatchToProps = dispatch => {
    return {
        setPackage: (price, duration, place, modal) => dispatch(actions.booking(price, duration, place, modal))
    }
}

export default connect(null, mapDispatchToProps)(Hills);