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

export const fetchOrdersFail=(error)=>{
    return{
        type: actionTypes.FETCH_ORDERS_FAIL, 
        error: error
    }
}

export const fetchOrders=()=>{
    return dispatch=>{
        dispatch(fetchOrdersStart());
        
            axios.get(process.env.REACT_APP_API_GET_ORDERS)
                .then((response)=> {
                    dispatch(fetchOrdersSuccess(response.data))
                 })
                .catch( (error)=> {
                   dispatch(fetchOrdersFail(error.message))
                   console.log('this is error from fetch orders actions', error)
             });    
    }
}
