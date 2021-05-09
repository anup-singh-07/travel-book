import { updatedObject } from '../utility.js';
import * as action from '../actions/actionTypes.js';

const initialState = {
    token: null,
    userId: null,
    loading: false,
    error: null
}

const authStart = (states, actions) => {
    return updatedObject(states, { error: null, loading: true });
}

const authSuccess = (states, actions) => {
    return updatedObject(states, {
        token: actions.idToken,
        userId: actions.userId,
        loading: false,
        error: null
    })
}

const authFail = (states, actions) => {
    return updatedObject(states, { error: actions.error, loading: false });
}

const authLogout = (states , actions) => {
    return updatedObject(states, { token: null, userId: null})
}

const reducer = (states = initialState, actions) => {
    switch (actions.type) {
        case action.AUTH_START: return authStart(states, actions);
        case action.AUTH_SUCCESS: return authSuccess(states, actions);
        case action.AUTH_FAIL: return authFail(states, actions);
        case action.AUTH_LOGOUT: return authLogout(states, actions);
        default: return states;
    }
}

export default reducer;