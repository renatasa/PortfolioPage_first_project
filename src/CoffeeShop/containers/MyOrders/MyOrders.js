import React, { Component } from 'react';
import CoffeeSpinner from '../../components/CoffeeSpinner/CoffeeSpinner';
import ShowOrders from '../../components/ShowOrders/ShowOrders';
import {NavLink} from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/fetchOrders';
import  './MyOrders.scss';
import classesForButton from '../../components/ShoppingNavBar/ShoppingNavBar.module.css';
import Error from '../../components/Error/Error';

export class MyOrders extends Component {
    componentDidMount(){
        this.props.getOrders();
    }


    render() {
        let totalOrders=[];
        
        if (this.props.allOrders===null || this.props.allOrders===undefined){
            if (this.props.fetchOrdersError ){
               totalOrders= <Error errorMessage={this.props.fetchOrdersError}/>
            } else {
                totalOrders=<CoffeeSpinner/>
            }
            
        } else if (this.props.allOrders !== null ) {
            totalOrders=<ShowOrders allOrders={this.props.allOrders} />;
        }
        console.log('state from render ', this.props.allOrders);
        
        return (
            <div class="totalOrders">
                
    
                <div class="totalOrders__button">
                <NavLink to="/coffeeShop/">      
                      <IconButton className={classesForButton.iconButton}>
                          <ShoppingCartIcon className={classesForButton.shoppingCartIcon}/>    
                      </IconButton>    
                </NavLink>
                </div>

                {totalOrders}
            </div>
        )
    }
}

const mapStateToProps=state=>{
    return{
        allOrders: state.fetchOrders.orders, 
        fetchOrdersError: state.fetchOrders.fetchOrdersError
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        getOrders: ()=>dispatch(actions.fetchOrders())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyOrders) ;
