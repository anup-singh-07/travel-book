import * as actionTypes from './actionTypes.js';

export const bookPlace = (price, duration, place, modal) => {
    return{
        type: actionTypes.BOOK_PLACE,
        price: price,
        duration: duration,
        place: place,
        modal: modal
    }
};

export const booking = ( price=0, duration='', place='', modal=false ) =>{
    return dispatch => {
        dispatch(bookPlace(price, duration, place, modal))
    };
};