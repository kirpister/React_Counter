import React from 'react';
import classes from './Button.module.css';

// props is way to get data from parent

const Button = (props) => {
    return (
        <button
        className={classes.button}
        type={props.type || 'button'}
        onClick={props.click}
        >
            {props.children}
        </button>
    );
};

export default Button;