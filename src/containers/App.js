import React, { Component } from 'react';
import style from './App.css';
import BurgerBuilder from './BurgerBuilder/BurgerBuilder';
import Layout from './Layout/Layout';

class App extends Component {
    render(){
        return (
            <Layout>
               <BurgerBuilder />
            </Layout>
        );
    }
};
export default App;