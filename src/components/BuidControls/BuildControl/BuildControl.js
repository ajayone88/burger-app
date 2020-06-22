import React from 'react';
import classes from './BuildControl.css';

const buildControl = (props) =>{
    return (
        <div className={classes.BuildControl}>
            <span className={classes.Label}>{props.label}</span>
            <button className={classes.Less} disabled={props.disabled} onClick={props.removeIngredient}>Less</button>
            <button className={classes.More} onClick={props.addIngredient}>More</button>
        </div>
    )
};

export default buildControl;