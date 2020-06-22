import React, { Component } from 'react';
import Aux from '../../hoc/Auxilliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/BuidControls/BuildControls';
import Modal from './../../components/UI/Modal/Modal';
import SummaryOrder from '../../components/SummaryOrder/SummaryOrder';

const INGREDIENT_PRICE = {
    onion:0.5,
    tomato:0.3,
    cucumber:0.2,
    vegPattie:0.8,
    cheese:0.6
};

class BurgerBuilder extends Component {
    
   state = {
        ingredients:{
            onion:0,
            tomato:0,
            cucumber:0,
            vegPattie:0,
            cheese:0
        },
        totalPrice : 4,
        purchaseable: false,
        purchasing: false
    }

    updatePurchaseable = (ingredients) =>{
        const ingredientCount  = Object.keys(ingredients)
            .reduce((count , el) => {
                return count + ingredients[el];
            }, 0);
        this.setState({ purchaseable: ingredientCount > 0 });
    }

    addIngredient = (type) =>{
        // Update Ingredient
        const ingredientCount = this.state.ingredients[type];
        const updatedIngedients = { ...this.state.ingredients };
        updatedIngedients[type] = ingredientCount + 1;

        // Update Price
        const additionPrice = INGREDIENT_PRICE[type];
        let totalPrice = this.state.totalPrice;
        let newTotalPrice = totalPrice + additionPrice;

        this.setState( {
                ingredients: updatedIngedients,
                totalPrice: newTotalPrice
            });
        this.updatePurchaseable(updatedIngedients);
    }

    removeIngredient = (type) =>{
        // Update Ingredient
        const ingredientCount = this.state.ingredients[type];
        const updatedIngedients = { ...this.state.ingredients };
        updatedIngedients[type] = ingredientCount - 1;
 
        // Update Price
        const deductionPrice = INGREDIENT_PRICE[type];
        let totalPrice = this.state.totalPrice;
        let newTotalPrice = totalPrice - deductionPrice;
 
        this.setState( {
                ingredients: updatedIngedients,
                totalPrice: newTotalPrice
            });
        this.updatePurchaseable(updatedIngedients);
    }

    openModalHandler = () =>{
        this.setState({
            purchasing: true
        })
    };

    closeModalHandler = () =>{
        this.setState({
            purchasing:false
        })
    };

    continueToOrder = () =>{
        alert("Continue To Order");
    };

    render(){

        const disabledInfo = {
            ... this.state.ingredients
        };
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        return (
            <Aux>
               <Modal show={this.state.purchasing} clicked={this.closeModalHandler}>
                    <SummaryOrder 
                        ingredients={this.state.ingredients}
                        closeModal={this.closeModalHandler}
                        continueToOrder={this.continueToOrder}
                   />
               </Modal>
               <Burger ingredients={this.state.ingredients}/>
               <BuildControls 
                    removeIngredient={this.removeIngredient} 
                    addIngredient={this.addIngredient}
                    disabled={disabledInfo}
                    totalPrice={this.state.totalPrice}
                    purchaseable={this.state.purchaseable}
                    purchasing={this.openModalHandler}/>
            </Aux>
        )
    }
}

export default BurgerBuilder;