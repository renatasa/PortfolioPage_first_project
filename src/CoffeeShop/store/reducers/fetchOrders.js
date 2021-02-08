import * as actionTypes from "../actions/actionTypes";

let initialState = {
  orders: null,
  fetchOrdersError: null,
};

export const fetchOrdersStart = (state, action) => {
  return { ...state, fetchOrdersError: null };
};

export const fetchOrdersSuccess = (state, action) => {
  return { ...state, orders: action.orders };
};

export const fetchOrdersFail = (state, action) => {
  return { ...state, fetchOrdersError: action.error };
};

const fetchOrdersReducer=(state=initialState, action)=>{
    switch(action.type){
        case actionTypes.FETCH_ORDERS_START: return fetchOrdersStart(state, action);
        case actionTypes.FETCH_ORDERS_SUCCESS: return fetchOrdersSuccess(state, action);
        case actionTypes.FETCH_ORDERS_FAIL: return fetchOrdersFail(state, action);
        default: return state;
    }
}


export default fetchOrdersReducer;
