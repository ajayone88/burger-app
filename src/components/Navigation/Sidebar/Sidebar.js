import React from 'react';
import classes from './Sidebar.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxilliary';
import NavigationItem from '../NavigationItem/NavigationItem';
import Logo from '../../Logo/Logo';

const sidebar = (props) =>{
    return (
        <Aux>
            <Backdrop show={props.show} clicked={props.closeSidebar}/>
            <div className={classes.Sidebar}
                 style={{
                     transform: props.show ? 'translateX(0px)' : 'translateX(-200px)',
                     opacity: props.show ? '1' : '0'
                 }}>
                <Logo />
                <ul>
                    <li>
                        <NavigationItem active={'Active'}>Burger Builder</NavigationItem>
                    </li>
                    <li>
                        <NavigationItem>Checkout</NavigationItem>
                    </li>
                </ul>
            </div>
        </Aux>
    )
};

export default sidebar;