import * as actionTypes from '../actions/actionTypes';

let initialState = {
    items: [
// {count: 0, description: "Mus mauris vitae ultricies leo integer malesuada n… accumsan lacus vel facilisis volutpat est velit.", name: "Salvador Dark", price: 1},
// {count: 0, description: "Mollis nunc sed id semper risus in hendrerit gravi…n tellus orci ac auctor augue mauris augue neque.", name: "Organic French", price: 2},
// {count: 0, description: "Augue lacus viverra vitae congue eu consequat ac f…m volutpat commodo sed egestas egestas fringilla.", name: "Arabic Mocha", price: 3},
// {count: 0, description: "Quam viverra orci sagittis eu volutpat odio facili…e tortor condimentum lacinia quis vel eros donec.", name: "Brazilian Cacoa", price: 2.5},
// {count: 0, description: "Integer eget aliquet nibh praesent tristique magna…t turpis cursus in hac habitasse platea dictumst.", name: "Brazilian Cacoa Butter", price: 3.5},
// {count: 0, description: "In fermentum et sollicitudin ac orci phasellus ege… eu tincidunt tortor aliquam nulla facilisi cras.", name: "Coffee Spice Mix", price: 2},

    ],

  //  order:[],

    showShoppingSummary: false,
    loading: false,
    fetchItemsError: false,
    submitOrderError: false,
    submitOrderSuccess:false,
    showShoppingSummaryModal: false,
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
    return {...state, loading: true, fetchItemsError: false}
}

const fetchItemsSuccess=(state, action)=>{
    return {...state, items:action.items, loading: false}
}


const fetchItemsFail=(state, action)=>{
    return{...state, loading: false, fetchItemsError: action.error}
}

// const testReducer=(state, action)=>{
//     return {...state, test1:action.test}  
// }

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
  return{...state, loading: true, submitOrderSuccess: false, submitOrderError: false, showShoppingSummaryModal: true}
}


const submitOrderSuccess=(state, action)=>{
  return{...state, loading: false, submitOrderSuccess: true, submitOrderError: false}
}

const submitOrderFail=(state, action)=>{
  return{...state, loading: false, submitOrderSuccess: false, submitOrderError: action.error, showShoppingSummaryModal: true}
}

const showShoppingSummaryModalReducer=(state, action)=>{
  return{ ...state, showShoppingSummaryModal: true}
}

const closeShoppingSummaryModalReducer=(state, action)=>{
  return{ ...state, showShoppingSummaryModal: false}
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
        case actionTypes.SHOW_SHOPPING_SUMMARY_MODAL_ACTION : return showShoppingSummaryModalReducer(state, action);
        case actionTypes.CLOSE_SHOPPING_SUMMARY_MODAL_ACTION : return closeShoppingSummaryModalReducer(state, action);

    //    case actionTypes.TEST1: return testReducer(state, action);

        default: return state;
    }
}


export default reducer;