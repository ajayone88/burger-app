import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.css';

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients).map(ikey => {
        return [...Array(props.ingredients[ikey])].map(( _, index) => {
            return  <BurgerIngredient key={ikey + index} type={ikey} />
        });
    }).reduce((arr, el) =>{
        return arr.concat(el);
    }, []); 

    if(transformedIngredients.length === 0 ){
        transformedIngredients = <p>Please start adding ingredient</p>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='breadTop' />
                {transformedIngredients}
            <BurgerIngredient type='breadBottom' />
        </div>
    )
};

export default burger;