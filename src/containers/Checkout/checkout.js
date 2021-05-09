import React, { useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import Input from '../../components/UI/Input/Input.js';
import { Button } from '../../components/UI/Buttons/Buttons.js';
import './checkout.css';

const Checkout = props => {
    const [data, setData] = useState({
        fname: '',
        lname: '',
        pin: '',
        state: '',
        num: '',
        email: '',
        address: ''
    })
    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post()
        console.log(data)
    }
    const onChangeHandler = (event) => {
        const value = event.target.value;
        setData({
            ...data,
            [event.target.name]: value
        })
    }
    return (
        <div className='contain'>
            <p style={{color:'antiquewhite', marginTop: '20px', fontSize: '40px'}}>Let's Go To</p>
            <h1 className='heading'>{props.place.toUpperCase()}</h1>
            <div className='form-card'>
                <h2 className='details'>Enter your details</h2>
                <form>
                    <div className='input-inline'>
                        <Input 
                            name='fname'
                            type='text' 
                            classname='input-item' 
                            onChange={onChangeHandler}
                            placeholder='Firstname' />
                        <Input 
                            name='lname'
                            type='text' 
                            classname='input-item' 
                            onChange={onChangeHandler}
                            placeholder='Lastname' />
                        <Input 
                            name='num'
                            type='number' 
                            classname='input-item' 
                            onChange={onChangeHandler}
                            placeholder='Contact Number' />
                        <Input 
                            name='email'
                            type='text' 
                            classname='textbox' 
                            onChange={onChangeHandler}
                            placeholder='Email Address' />
                        <Input 
                            name='address'
                            type='text' 
                            classname='textbox' 
                            onChange={onChangeHandler}
                            placeholder='Your Address' />
                        <Input 
                            name='state'
                            type='text' 
                            classname='input-item' 
                            onChange={onChangeHandler}
                            placeholder='State' />
                        <Input 
                            name='pin'
                            type='text' 
                            classname='input-item' 
                            onChange={onChangeHandler}
                            placeholder='Pin Code' />
                    </div>
                    <Button classname='book-btn' onClick = {onSubmitHandler}>BOOK</Button>
                </form>
            </div>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        place: state.product.place
    }
}
export default connect(mapStateToProps)(Checkout);