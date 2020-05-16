import * as actionTypes from './actionTypes'

export const addItem=()=>{
    return{
        type: actionTypes.ADD_ITEM,
}
}

export const removeItem=()=>{
    return{
        type: actionTypes.REMOVE_ITEM
        
    }
}