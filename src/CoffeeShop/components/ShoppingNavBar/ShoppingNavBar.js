import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ViewList from '@material-ui/icons/ViewList';
import { NavLink} from 'react-router-dom';
import './ShoppingNavBar.scss' ;
import {connect} from 'react-redux';

const shoppingNavBar =(props)=> {
        let itemsInCart=0;

        for (let i=0; i<props.items.length; i++){
              if(props.items[i].count>0){ itemsInCart=itemsInCart +1 } 
        }


        return (
        <div className="navBar">

                <div className="navBar__buttons">
                
                <div className="navBar__buttons__shoppingCart">
                  <IconButton onClick={props.clicked} className="navBar__buttons-iconButton"  >
                      <ShoppingCartIcon className="navBar__buttons-btn"/>
                  </IconButton>
               { itemsInCart>0? <div className="howManyItemsInCart">{itemsInCart}</div> : <div className="howManyItemsInCartHidden">{itemsInCart}</div> }
                </div>
               
                 <NavLink to="/coffeeShop/myOrders/"> 
                    <div className="navBar__buttons__viewOrders">
                      <IconButton className="navBar__buttons-iconButton"  onClick={props.changeHistory}>
                          <ViewList className="navBar__buttons-btn"/>    
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
