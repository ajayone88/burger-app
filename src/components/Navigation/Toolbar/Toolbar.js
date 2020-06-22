import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItem from '../NavigationItem/NavigationItem';
import Menu from '../Menu/Menu';

const toolbar = (props) =>{
    return (
        <header className={classes.Toolbar}>
            <Menu clicked={props.openSidebar}/>
            <Logo />
            <nav className={classes.NavigationItem}>
              <NavigationItem active={'Active'}>Burger Builder</NavigationItem>
              <NavigationItem active={''} >Checkout</NavigationItem>
            </nav>
        </header>
    )
};

export default toolbar;