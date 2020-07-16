import * as actionTypes from './actionTypes';
import axios from 'axios';

export const fetchItemsStart=()=>{
    return{
        type: actionTypes.FETCH_ITEMS_START
    }
}

export const fetchItemsSuccess=(items)=>{
    return{
        type: actionTypes.FETCH_ITEMS_SUCCESS,
        items: items

    }
}

export const fetchItemsFail=(error)=>{
    return{
        type:actionTypes.FETCH_ITEMS_FAIL, 
        error: error

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
        let fetchedItems=null;
       dispatch(fetchItemsStart());
        axios.get('https://shoppingcart-9ee7a.firebaseio.com/initialItems.json')
            .then(response=>{
                dispatch(fetchItemsSuccess(response.data.items));
            })
            .catch( (error)=> {
                console.log('this is error from fetch items', error.message)
                dispatch(fetchItemsFail(error.message))
          })
    }
}

export const addItem=(index)=>{
    return{
        type: actionTypes.ADD_ITEM,
        index: index
}
}

export const removeItem=(index)=>{
    return{
        type: actionTypes.REMOVE_ITEM,
        index: index
        
    }
}


export const submitOrderStart=()=>{
    return{
        type: actionTypes.SUBMIT_ORDER_START
}
}


export const submitOrderSuccess=()=>{
    return{
        type: actionTypes.SUBMIT_ORDER_SUCCESS
}
}


export const submitOrderFail=(error)=>{
    return{
        type: actionTypes.SUBMIT_ORDER_FAIL, 
        error: error
}
}

export const submitOrder=(items, totalPrice)=>{
    return dispatch=>{
        dispatch(submitOrderStart());

        let orderedItems=[];
        orderedItems=items.filter(item=>item.count>0);
        console.log('this is orderedItems from submit order ', orderedItems);

        const order = {
            items: orderedItems,
            totalPrice: totalPrice
        }

        axios.post('https://shoppingcart-9ee7a.firebaseio.com/orders.json', order)
        .then(response=>{
            dispatch(submitOrderSuccess())
        })
        .catch(error=>{
            console.log(' error in submit order ', error.message);
           dispatch(submitOrderFail(error.message))
        })

        
    }
}

export const addAnimal=(index)=>{
    return{
        type: actionTypes.ADD_ANIMAL,
        index: index 
    }
}

export const addCow=()=>{
    return{
        type: actionTypes.ADD_COW
        
    }
}