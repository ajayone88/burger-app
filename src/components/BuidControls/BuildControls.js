import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.css';
const buildControls = (props) =>{
    const controls = [
        { label:'Cheese', type:'cheese' },
        { label:'Onion', type:'onion' },
        { label:'Cucumber', type:'cucumber' },
        { label:'Tomato', type:'tomato' },
        { label:'VegPattie', type:'vegPattie' },
    ];
    return (
        <div className={classes.BurgerControls}>
            <p>Current Price <strong>{props.totalPrice.toFixed(2)}</strong></p>
            {controls.map((ing) =>{
                return <BuildControl 
                    key={ing.label} 
                    label={ing.label} 
                    addIngredient={() => props.addIngredient(ing.type)}
                    removeIngredient={() => props.removeIngredient(ing.type)}
                    disabled={props.disabled[ing.type]}/>
            })}
            <button 
                className={classes.CheckoutButton} 
                disabled={!props.purchaseable}
                onClick={props.purchasing}>Checkout</button>
        </div>
    )
};

export default buildControls;