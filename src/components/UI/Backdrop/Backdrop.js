import React from 'react';
import classes from './Backdrop.css';

const backdrop = (props) =>{
    const backdropVal = props.show ? 
                        <div className={classes.Backdrop} onClick={props.clicked}></div> 
                        : null;
    return backdropVal
};

export default backdrop;