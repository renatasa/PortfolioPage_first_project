import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ViewList from '@material-ui/icons/ViewList';
import { NavLink} from 'react-router-dom';
import classes from './ShoppingNavBar.module.css' ;
//import MyOrders from '../../containers/MyOrders/MyOrders';
import {connect} from 'react-redux';

const shoppingNavBar =(props)=> {
        let itemsInCart=0;

        for (let i=0; i<props.items.length; i++){
              if(props.items[i].count>0){ itemsInCart=itemsInCart +1 } 
        }


        return (
        <div className={classes.navBar}>

                <div className={classes.Buttons}>
                
                <div className={classes.shoppingCart}>
                  <IconButton onClick={props.clicked} className={classes.iconButton}  >
                      <ShoppingCartIcon className={classes.shoppingCartIcon}/>
                  </IconButton>
               { itemsInCart>0? <div className={classes.howManyItemsInCart}>{itemsInCart}</div> : <div className={classes.howManyItemsInCartHidden}>{itemsInCart}</div> }
                </div>
               
                 <NavLink to="/coffeeShop/myOrders/"> 
                    <div className={classes.viewOrders}>
                      <IconButton className={classes.iconButton}  onClick={props.changeHistory}>
                          <ViewList className={classes.ViewListIcon}/>    
                      </IconButton>    
                    </div>
                 </NavLink> 

                </div>
                
        </div>

        )
}

const mapStateToProps=state=>{
  return{
    items: state.fetchItems.items
  }
}


export default connect(mapStateToProps)(shoppingNavBar);
