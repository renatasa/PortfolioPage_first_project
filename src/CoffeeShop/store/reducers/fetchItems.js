import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';

let initialState = {
    items: [],
    showShoppingSummary: false,
    loading: false,
    totalPrice: 0,
    test1: 'test lala'

}

const fetchItemsStart=()=>{
    return{

    }
}

const fetchItemsSuccess=()=>{
    return{
        
    }
}

const fetchItemsFail=()=>{
    return{
        
    }
}

const testReducer=(state, action)=>{
    return updateObject(state, {test1:action.test})  
}


const reducer=(state=initialState, action)=>{
    switch(action.type){
        case actionTypes.FETCH_ORDERS_START: return fetchItemsStart(state, action);
        case actionTypes.FETCH_ORDERS_START: return fetchItemsSuccess(state, action);
        case actionTypes.FETCH_ORDERS_START: return fetchItemsFail(state, action);
        case actionTypes.TEST1: return testReducer(state, action);
        default: return state;
    }
}


export default reducer;