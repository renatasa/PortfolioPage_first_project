import * as actionTypes from '../actions/actionTypes';

let initialState = {

}

export const fetchItemsStart=()=>{
    return{

    }
}

export const fetchItemsSuccess=()=>{
    return{
        
    }
}

export const fetchItemsFail=()=>{
    return{
        
    }
}

const reducer=(state=initialState, action)=>{
    switch(action.type){
        case actionTypes.FETCH_ORDERS_START: return fetchItemsStart(state, action);
        case actionTypes.FETCH_ORDERS_START: return fetchItemsSuccess(state, action);
        case actionTypes.FETCH_ORDERS_START: return fetchItemsFail(state, action);
        default: return state;
    }
}


export default reducer;