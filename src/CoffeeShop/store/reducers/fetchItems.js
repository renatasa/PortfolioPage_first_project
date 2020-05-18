import * as actionTypes from '../actions/actionTypes';

let initialState = {
    items: [],
    showShoppingSummary: false,
    loading: false,
    totalPrice: 0,
    test1: 'test lala', 
    test2:[
        {name:'horse', count: 0}, 
        {name:'cow', count:0}, 
        {name:'sheep', count:0}, 
        {name:'donkey', count:0}
    ]

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

     let newCount = state.items[action.index].count +1 ;


    //  const todoReducer = (state, action) => {
    //     switch (action.type) {
    //       case 'markDone':
    //        return Object.assign(
    //          [...state], 
    //          {[action.index]:
    //            Object.assign({}, state[action.index], {done: true}))
      
    //     }
    //   }



    // let updatedItems= Object.assign(
    //                         [...state.items], 
    //                         {[action.index]: 
    //                             Object.assign({}, state.items[action.index], {count: newCount})})

    // console.log('this is updatedItems from addItem reducer ', updatedItems);

    // let newArray = [...state.items];
    // newArray[action.index] = {...newArray[action.index], count: newCount}

// let array=[...state.items];
// let item=null;
//     function updateObjectInArray(array, action) {
//         return array.map((item, index) => {
//           if (index !== action.index) {
//             // This isn't the item we care about - keep it as-is
//             return item
//           }
      
//           // Otherwise, this is the one we want - return an updated value
//           return {
//             ...item,
//             count:newCount
//           }
//         })
//       }


      return Object.assign({}, state, {
        items: state.items.map((item, index) => {
          if (index === action.index) {
            return Object.assign({}, item, {
              count: state.items[action.index].count +1
            })
          }
          return item
        })
      })
     
     // {...state, items:[
    //     ...state.items, 
    //     [action.index]:{...state.items[action.index], count: newCount}
    // ]}

    
    
//     {...state, 
//                 items:{
//                 ...state.items, 
//                     [action.index] : {
//                         ...state.items[action.index], 
//                         count:newCount
//                     }
// }}


// {  ...state, items:[
//     ...state.items, [action.index] : {
//         ...state.items[action.index],
//         count:nextCount 
//     }
// ]
// }


        // ...state.items, [action.index]:{
        //     ...state.items[action.index], 
        //     count: nextCount
        // }
        

}

const removeItem=(state, action)=>{
    return Object.assign({}, state, {
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

const addAnimal=(state, action)=>{
    console.log('this is addAnimal reducer');
    console.log('this is addAnimal reducer action.index ', action.index);
    console.log('this is addAnimal reducer state.test2[action.index] ', state.test2[action.index]);
    console.log('this is addAnimal reducer state.test2[action.index].name ', state.test2[action.index].name);
    let newcount=3;
    return {
            ...state, 
            test2:{
                ...state.test2, 
                [action.index] : {
                    ...state.test2[action.index], 
                    count: newcount
                }
            }

        // ...state.test2, [action.index]:{
        //     ...state.test2[action.index],
        //     count:newcount
            
        // }
    }  
}

const addCow=(state, action)=>{
    return {}  
}



const reducer=(state=initialState, action)=>{
    switch(action.type){
        case actionTypes.FETCH_ITEMS_START: return fetchItemsStart(state, action);
        case actionTypes.FETCH_ITEMS_SUCCESS: return fetchItemsSuccess(state, action);
        case actionTypes.FETCH_ITEMS_FAIL: return fetchItemsFail(state, action);

        case actionTypes.ADD_ITEM: return addItem(state, action);
        case actionTypes.REMOVE_ITEM: return removeItem(state, action);
        case actionTypes.TEST1: return testReducer(state, action);
        case actionTypes.ADD_ANIMAL: return addAnimal(state, action);
        case actionTypes.ADD_COW: return addCow(state, action);
        default: return state;
    }
}


export default reducer;