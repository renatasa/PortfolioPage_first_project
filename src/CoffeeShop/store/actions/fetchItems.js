import * as actionTypes from './actionTypes';

export const fetchItemsStart=()=>{
    return{
        type: actionTypes.FETCH_ITEMS_START
    }
}

export const fetchItemsSuccess=()=>{
    return{
        type: actionTypes.FETCH_ITEMS_SUCCESS

    }
}

export const fetchItemsFail=()=>{
    return{
        type:actionTypes.FETCH_ITEMS_FAIL

    }
}

export const testAction=(test)=>{
    return{
        type:actionTypes.TEST1, 
        test: test

    }
}

export const fetchItems=()=>{
    return dispatch=>{

    }
}