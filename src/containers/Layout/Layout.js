import React, { Component } from 'react';
import Aux from '../../hoc/Auxilliary';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Sidebar from '../../components/Navigation/Sidebar/Sidebar';

class Layout extends Component {
    state = {
        showSidebar: false
    }

    closeSidebarHandler = () =>{
        this.setState({
            showSidebar: false
        });
    };

    openSidebarHandler = () =>{
        this.setState({
            showSidebar: true
        });
    };

    render(){
        return(
            <Aux>
                <Toolbar openSidebar={this.openSidebarHandler} />
                <Sidebar show={this.state.showSidebar} closeSidebar={this.closeSidebarHandler}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}
    
export default Layout;