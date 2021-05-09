import React, { useState } from 'react';
import { connect } from 'react-redux';

import Spinner from '../../components/UI/Spinner/Spinner.js';
import { Button } from '../../components/UI/Buttons/Buttons.js';
import Input from '../../components/UI/Input/Input.js';
import * as actions from '../../Store/actions/index.js';
import Form from '../../components/UI/Form/Form.js';
import './Auth.css';

const Auth = props => {
    const [value, setValue] = useState(1);
    const [data, setData] = useState({
        username: '',
        email: '',
        pwd: ''
    });

    const setLogin = () => setValue(1);
    const setRegister = () => setValue(0);
    const auth = (e) => {
        e.preventDefault();
        props.onAuth(data.username, data.email, data.pwd, value);
    }
    const onChangeHandler = event => {
        const value = event.target.value;
        setData({
            ...data,
            [event.target.name]: value
        });
    }
    return (
        <div>
            {value
                ? (
                    <div>
                        {props.loading
                            ? <Spinner />
                            : (
                                <Form
                                    onSubmit={auth}
                                    toggleStyle={{ left: '0' }}
                                    loginToggle={{ color: 'white' }}
                                    setLogin={setLogin}
                                    setRegister={setRegister}
                                    loginSliderStyle={{ left: value ? '50px' : '-400px' }}
                                    auth='login'>
                                    <Input
                                        name='email'
                                        type='text'
                                        classname='input-field'
                                        placeholder='E-mail'
                                        onChange={onChangeHandler} />
                                    <Input
                                        name='pwd'
                                        type='password'
                                        classname='input-field'
                                        placeholder='Password'
                                        onChange={onChangeHandler} />
                                    <Input
                                        type='checkbox'
                                        classname='check-box' /> <span>Remember Me</span>
                                    <Button type='submit' classname='submit-btn'>Log In</Button>
                                </Form>
                            )
                        }
                    </div>
                )
                : (
                    <Form
                        onSubmit={auth}
                        toggleStyle={{ left: '140px' }}
                        loginToggle={{ color: 'black' }}
                        signupToggle={{ color: 'white' }}
                        setLogin={setLogin}
                        setRegister={setRegister}
                        loginSliderStyle={{ left: value ? '-400px' : '50px' }}
                        auth='register'>
                        <Input
                            name='username'
                            type='text'
                            classname='input-field'
                            placeholder='Username'
                            onChange={onChangeHandler} />
                        <Input
                            name='email'
                            type='text'
                            classname='input-field'
                            placeholder='E-mail'
                            onChange={onChangeHandler} />
                        <Input
                            name='pwd'
                            type='password'
                            classname='input-field'
                            placeholder='Password'
                            onChange={onChangeHandler} />
                        <Input
                            type='checkbox'
                            classname='check-box' /><span>I agree to Terms & Conditions.</span>
                        <Button classname='submit-btn'>Register</Button>
                    </Form>
                )}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (username, email, password, value) => dispatch(actions.auth(username, email, password, value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);