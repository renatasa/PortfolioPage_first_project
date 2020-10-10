import * as actionTypes from './actionTypes';
//import axios from 'axios';

// export const fetchItemsStart=()=>{
//     return{
//         type: actionTypes.FETCH_ITEMS_START
//     }
// }

// export const fetchItemsSuccess=(items)=>{
//     return{
//         type: actionTypes.FETCH_ITEMS_SUCCESS,
//         items: items

//     }
// }

// export const fetchItemsFail=(error)=>{
//     return{
//         type:actionTypes.FETCH_ITEMS_FAIL, 
//         error: error

//     }
// }

// export const catSpeak=()=>{
//     return{
//         type:actionTypes.CAT_SPEAK

//     }
// }


// export const fetchItems=()=>{
//     console.log('fetch items action');
//     let counter=0;
//     return dispatch=>{
//        dispatch(fetchItemsStart());
//         axios.get('https://api.covid19api.com/all')
//             .then(response=>{
//                 let countryNames=[];
//                 countryNames[0]= response.data[0].Country;
//             for (let i=1; i<response.data.length ; i++){
//                 if(response.data[i].Country !=="United States of America" && response.data[i].Country !=="United Kingdom") {
//                 if(response.data[i].Country !== response.data[i-1].Country){
//                     countryNames.push(response.data[i].Country)
//                 }
//             }
//             }

//             dispatch(fetchItemsSuccess(countryNames))
//             })
//             .catch(error=>{
//                 dispatch(fetchItemsFail(error.message))
//             })
//     }
// }



export const selectStartDate=(date)=>{
    console.log('selectstartdate ', date);
    return {
        type: actionTypes.SELECT_START_DATE, 
        date: date
    }
}

export const selectEndDate=(date)=>{
    return {
        type: actionTypes.SELECT_END_DATE, 
        date: date
    }
}


export const selectCountry=(country)=>{
    return {
        type: actionTypes.SELECT_COUNTRY, 
        country: country
    }
}

export const showDropdown=()=>{
    return {
        type: actionTypes.SHOW_DROPDOWN
    }
}


