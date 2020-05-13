import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import ListAlt from '@material-ui/icons/ListAlt';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {NavLink} from 'react-router-dom';
import classes from './Home.module.css';


export class Home extends Component {
    render() {
        return (
            <div className={classes.HomeButtons}>


  
        <NavLink to="/coffeeShop/">
                    <IconButton>
                        <ShoppingCartIcon/>    
                    </IconButton>    
        </NavLink>
        </div>

            
        )
    }
}

export default Home

