import * as actionTypes from '../actions/actionTypes';

let initialState={
    orders:null, 
    fetchOrdersError: null
}

export const fetchOrdersStart=(state, action)=>{
    console.log('fetchOrdersStart')
    return{ 

    }
}

export const fetchOrdersSuccess=(state, action)=>{
    console.log('this is action.orders from fetchOrders reducer ', action.orders);
   // return Object.assign({}, state, {orders:action.orders})
   return {...state, orders: action.orders}
}

export const fetchOrdersFail=(state, action)=>{
    console.log('fetchOrdersFail')
    return{
        
    }
}

const fetchOrdersReducer=(state=initialState, action)=>{
    switch(action.type){
        case actionTypes.FETCH_ORDERS_START: return fetchOrdersStart(state, action);
        case actionTypes.FETCH_ORDERS_SUCCESS: return fetchOrdersSuccess(state, action);
        case actionTypes.FETCH_ORDERS_FAIL: return fetchOrdersFail(state, action);
        default: return state;
    }
}


export default fetchOrdersReducer;