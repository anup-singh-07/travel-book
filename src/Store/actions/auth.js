import axios from 'axios';
import * as actionTypes from './actionTypes.js';

export const authStart = () => {
    return{
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token, userId) => {
    return{
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId
    };
};

export const authFail = error => {
    return{
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const authLogout = () => {
    return{
        type: actionTypes.AUTH_LOGOUT
    };
};

export const checkAuthTimeout = expiryTime => {
    return dispatch => {
        setTimeout(() => {
            dispatch(authLogout());
        },expiryTime * 1000);
    };
};

export const auth = (username, email, password, value) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            username: username,
            email: email, 
            password: password,
            returnSecureToken: true
        };
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB4x7KcnplEvXm7kBVW1A0nZXmlEmRHnB0';
        if(value){
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB4x7KcnplEvXm7kBVW1A0nZXmlEmRHnB0'
        }
        axios.post(url, authData)
            .then( res => {
                console.log(res.data);
                dispatch(authSuccess(res.data.idToken, res.data.localId));
                dispatch(checkAuthTimeout(res.data.expiresIn));
            })
            .catch(err => {
                console.log(err);
                dispatch(authFail(err))
            });
    }
}