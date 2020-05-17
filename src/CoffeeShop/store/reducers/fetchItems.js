import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';

let initialState = {
    items: ["item1", "item2"],
    showShoppingSummary: false,
    loading: false,
    totalPrice: 0,
    test1: 'test lala'

}

const fetchItemsStart=(state, action)=>{
    return {...state, loading: true}
}

const fetchItemsSuccess=(state, action)=>{
    return {...state, items:action.items, loading: false}
}

const fetchItemsFail=()=>{
    return{
        
    }
}

const testReducer=(state, action)=>{
    return {...state, test1:action.test}  
}


const reducer=(state=initialState, action)=>{
    switch(action.type){
        case actionTypes.FETCH_ITEMS_START: return fetchItemsStart(state, action);
        case actionTypes.FETCH_ITEMS_SUCCESS: return fetchItemsSuccess(state, action);
        case actionTypes.FETCH_ITEMS_FAIL: return fetchItemsFail(state, action);
        case actionTypes.TEST1: return testReducer(state, action);
        default: return state;
    }
}


export default reducer;