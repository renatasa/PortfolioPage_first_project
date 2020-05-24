import * as actionTypes from '../actions/actionTypes';

let initialState = {
    items: [],
    showShoppingSummary: false,
    loading: false,
    totalPrice: 0
    // test1: 'test lala', 
    // test2:[
    //     {name:'horse', count: 0}, 
    //     {name:'cow', count:0}, 
    //     {name:'sheep', count:0}, 
    //     {name:'donkey', count:0}
    // ]

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

const addItem=(state, action)=>{

      return Object.assign({}, state, {totalPrice: (state.totalPrice+state.items[action.index].price)}, {
        items: state.items.map((item, index) => {
          if (index === action.index) {
            return Object.assign({}, item, {
              count: state.items[action.index].count +1
            })
          }
          return item
        })
      })

}

const removeItem=(state, action)=>{
    return Object.assign({}, state, {totalPrice: (state.totalPrice-state.items[action.index].price)},{
        items: state.items.map((item, index) => {
          if (index === action.index) {
            return Object.assign({}, item, {
              count: state.items[action.index].count -1
            })
          }
          return item
        })
      })
}

const submitOrderStart=(state, action)=>{
  return{...state, loading: true}
}


const submitOrderSuccess=(state, action)=>{
  return{...state, loading: false}
}

const submitOrderFail=(state, action)=>{
  return{}
}


const reducer=(state=initialState, action)=>{
    switch(action.type){
        case actionTypes.FETCH_ITEMS_START: return fetchItemsStart(state, action);
        case actionTypes.FETCH_ITEMS_SUCCESS: return fetchItemsSuccess(state, action);
        case actionTypes.FETCH_ITEMS_FAIL: return fetchItemsFail(state, action);

        case actionTypes.ADD_ITEM: return addItem(state, action);
        case actionTypes.REMOVE_ITEM: return removeItem(state, action);
        case actionTypes.SUBMIT_ORDER_START: return submitOrderStart(state, action);
        case actionTypes.SUBMIT_ORDER_SUCCESS: return submitOrderSuccess(state, action);
        case actionTypes.SUBMIT_ORDER_FAIL: return submitOrderFail(state, action);

    //    case actionTypes.TEST1: return testReducer(state, action);

        default: return state;
    }
}


export default reducer;