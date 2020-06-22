import React from 'react';
import classes from './NavigationItem.css';

const navigationItem = (props) =>{
    return (
        <div className={[classes.NavigationItem, classes[props.active]].join(" ")}>
            <a>{props.children}</a>
        </div>
    )
};

export default navigationItem;