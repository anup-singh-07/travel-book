import React, { useState } from 'react';
// import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../../Store/actions/index.js';
import {Button} from '../../components/UI/Buttons/Buttons.js';
import Modal from '../../components/UI/Modal/Modal.js';
import BookingSummary from '../../components/BookingSummary/BookingSummary.js';
import Ocean from './Oceans/Oceans.js';
import Hills from './Hills/Hills.js';

const Products = props => {
    const [modal, setModal] = useState(true);
    const hideModal = () => setModal(state => false);
    const setPackage = () => {
        props.setPackage();
    }
    React.useEffect(() => { hideModal() }, [modal]);
    const toCheckout = () => {
        // window.alert('Going to Checkout');
        props.history.push('/checkout');
    }
    return (
        <div>
            <Modal show={props.showModal} modalClosed={() => setPackage()}>
                <BookingSummary
                    place={props.place}
                    price={props.price}
                    stay={props.stay} />
                <Button 
                    classname='button-Desgin'
                    buttonStyle='btn-success'
                    onClick={toCheckout}>Continue</Button>
                <Button 
                    classname='button-Desgin'
                    buttonStyle='btn-danger'
                    onClick={setPackage}>Cancel</Button>
            </Modal>
            <Ocean />
            <Hills />
        </div>
    );
}
const mapStateToProps = state => {
    return {
        place: state.product.place,
        price: state.product.price,
        stay: state.product.duration,
        showModal: state.product.modal
    }
}
const mapDispatchToProps = dispatch => {
    return {
        setPackage: () => dispatch(actions.booking())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Products);