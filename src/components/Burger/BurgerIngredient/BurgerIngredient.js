import React from 'react';
import PropTypes from 'prop-types';
import classes from './BurgerIngredient.css';

const burgerIngredient = (props) =>{
    let ingredient = null;
    switch(props.type){
        case ('breadTop'):{
            ingredient = <div className={classes.BreadTop}>
                <div className={classes.Sead1}></div>
                <div className={classes.Sead2}></div>
                <div className={classes.Sead3}></div>
                <div className={classes.Sead4}></div>
            </div>
            break;
        }
        case ('breadBottom'):{
            ingredient = <div className={classes.BreadBottom}></div>                
            break;
        }
        case ('cheese'):{
            ingredient = <div className={classes.Cheese}></div>
            break;
        }

        case ('cucumber'):{
            ingredient = <div className={classes.Cucumber}></div>
            break;
        }

        case ('vegPattie'):{
            ingredient = <div className={classes.VegPattie}></div>
            break;
        }

        case ('onion'):{
            ingredient = <div className={classes.Onion}></div>
            break;
        }

        case ('tomato'):{
            ingredient = <div className={classes.Tomato}></div>
            break;
        }
    }
    return ingredient;
};

burgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
}

export default burgerIngredient;