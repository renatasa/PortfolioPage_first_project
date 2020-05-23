import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ViewList from '@material-ui/icons/ViewList';
import {Route, Switch, NavLink} from 'react-router-dom';
//import Button from '../Button/Button';
import classes from './ShoppingNavBar.module.css' ;
import MyOrders from '../../containers/MyOrders/MyOrders'
import { responsiveFontSizes } from '@material-ui/core';
import { sizing } from '@material-ui/system';

const shoppingNavBar =(props)=> {

    const styles = theme => ({
        smallButton: {
          padding: 6
        },
        largeButton: {
          padding: 24
        },
        largeIcon: {
          fontSize: "3em"
        },
        input: {
          display: "none"
        }
      });    

        return (
        <div className={classes.navBar}>

        <Switch>
        <Route path="/shoppingCart/myOrders">
            <MyOrders />
          </Route>
        </Switch>

                <div className={classes.Buttons}>
                <IconButton onClick={props.clicked} className={classes.iconButton}  >
                    <ShoppingCartIcon className={classes.Cart}/>
                </IconButton>
                <NavLink to="/shoppingCart/myOrders">
                    <IconButton className={classes.iconButton}>
                        <ViewList className={classes.ViewList}/>    
                    </IconButton>    
                </NavLink>
                </div>
                
        </div>

        )
}

export default shoppingNavBar;
