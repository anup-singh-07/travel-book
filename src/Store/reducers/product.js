import {updatedObject} from '../utility.js';
import * as action from '../actions/actionTypes.js';

const initialState = {
    price: 0,
    duration: '',
    place: '',
    modal: false
};

const bookPlace = (state, actions) => {
    return updatedObject(state, {
        price : actions.price,
        duration: actions.duration,
        place: actions.place,
        modal: actions.modal
    })
}

const reducer = (state = initialState, actions) =>{
    switch(actions.type) {
        case action.BOOK_PLACE :
            return bookPlace(state, actions);
        default: return state;
    }
}

export default reducer;