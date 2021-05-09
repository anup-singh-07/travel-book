import React from 'react';
import { Link } from 'react-router-dom';

const normalCard = props => {
    return (
        <>
            <li className='cards__item' onClick={props.clicked}>
                <Link className='cards__item__link' to='/products'>
                    <figure className='cards__item__pic-wrap' data-category={props.label}>
                        <img src={props.image} className='cards__item__img' alt='images' />
                    </figure>
                    <div className='cards__item__info'>
                        <h5 className='cards__item__text'>
                            {props.text}
                        </h5>
                        <hr style={{ border: props.home ? 'none' : '1px solid black' }} />
                        <h3>{props.stay}</h3>
                        <h3>{props.pay}</h3>
                    </div>
                </Link>
            </li>
        </>
    )
}

export default normalCard;