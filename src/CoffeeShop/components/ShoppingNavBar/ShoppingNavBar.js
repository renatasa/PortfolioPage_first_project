import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ViewList from '@material-ui/icons/ViewList';
import {Route, Switch, NavLink} from 'react-router-dom';
//import Button from '../Button/Button';
import classes from './ShoppingNavBar.module.css' ;
import MyOrders from '../../containers/MyOrders/MyOrders'

const shoppingNavBar =(props)=> {
        return (
    

        <div className={classes.navBar}>

        <Switch>
        <Route path="/shoppingCart/myOrders">
            <MyOrders />
          </Route>
        </Switch>

                <div className={classes.CartButton}>
                <IconButton onClick={props.clicked} >
                    <ShoppingCartIcon className={classes.Cart}/>
                </IconButton>
                <NavLink to="/shoppingCart/myOrders">
                    <IconButton>
                        <ViewList/>    
                    </IconButton>    
                </NavLink>
                </div>
        </div>

        )
}

export default shoppingNavBar;
