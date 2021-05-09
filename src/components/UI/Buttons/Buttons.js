import React from 'react';
import './Buttons.css';

const STYLES = ['btn--primary', 'btn--outline', 'btn--blue', 'toggle-btn', 'submit-btn', 'btn-success', 'btn-danger'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = (props) => {
  const checkButtonStyle = STYLES.includes(props.buttonStyle)
    ? props.buttonStyle
    : null;

  const checkButtonSize = SIZES.includes(props.buttonSize) 
    ? props.buttonSize 
    : null;

  return (
    // <Link to={props.pathname} className='btn-mobile'>
      <button
        className={`${props.classname} ${checkButtonStyle} ${checkButtonSize}`}
        onClick={props.onClick}
        type={props.type}
        style={props.style}
      >
        {props.children}
      </button>
    // </Link>
  );
};