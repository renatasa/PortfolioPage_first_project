import * as actionTypes from '../actions/actionTypes';
import axios from 'axios';

export const fetchOrdersStart=()=>{
    return{
        type: actionTypes.FETCH_ORDERS_START
    }
}

export const fetchOrdersSuccess=(orders)=>{
    console.log('fetchOrders action creator, orders: ', orders);
    return{
        type: actionTypes.FETCH_ORDERS_SUCCESS,
        orders: orders
    }
}

export const fetchOrdersFail=()=>{
    return{
        type: actionTypes.FETCH_ORDERS_FAIL
    }
}

export const fetchOrders=()=>{
    return dispatch=>{
        dispatch(fetchOrdersStart());
        
            axios.get('https://shoppingcart-9ee7a.firebaseio.com/orders.json')
                .then((response)=> {
                    dispatch(fetchOrdersSuccess(response.data))
                 })
                .catch( (error)=> {
                   dispatch(fetchOrdersFail(error))
                   console.log('this is error from fetch orders', error)
             });
    
        
    }
}
