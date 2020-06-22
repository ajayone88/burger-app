import React from 'react';
import classes from './Logo.css';
import burger from '../../assets/images/burger.png';
const logo = () =>{
    return (
        <div className={classes.Logo}>
            <img src={burger} alt="myLogo"></img>
        </div>
    )
};

export default logo;