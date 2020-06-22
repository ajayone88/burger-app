import React from 'react';
import Aux from '../../../hoc/Auxilliary';
import classes from './Modal.css'
import Backdrop from '../Backdrop/Backdrop';
const modal = (props) => {
    return (
        <Aux>
            <Backdrop show={props.show} clicked={props.clicked}/>
            <div className={classes.Modal} 
                 style={{
                    transform: props.show ? 'translateY(0px)' : 'translateY(-410px)',
                    opacity: props.show ? '1' : '0'
                }}>
                {props.children}
            </div>
        </Aux>
    )
};

export default modal;