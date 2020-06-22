import React from 'react';
import classes from './SummaryOrder.css';
import Button from '../UI/Button/Button';
const summaryOrder = (props) =>{
    const liElement = Object.keys(props.ingredients).map(igKey =>{
            return(
                <li key={igKey}>
                    <span style={{textTransform:'capitalize'}}>{igKey}</span>
                    <strong>{" : " + props.ingredients[igKey]}</strong>
                </li>
            )
        })
    return (
        <div className={classes.SummaryOrder}>
            <h4>Selected Ingredeints</h4>
            <ul>
                {liElement}
            </ul>
            <p>Want to continue ?</p>
            <Button 
                clicked={props.closeModal} 
                btnType={'Success'}>Close</Button>
            <Button 
                clicked={props.continueToOrder} 
                btnType={'Danger'}>Continue</Button>
        </div>
    )
};

export default summaryOrder;