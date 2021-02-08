import * as actionTypes from '../actions/actionTypes';

let initialState = {
   // items: [], 
    // items:["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", 
    // "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", 
    // "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Central African Republic", "Chad", "Chile", 
    // "China", "Colombia", "Comoros", "Congo (Brazzaville)", "Congo (Kinshasa)", "Costa Rica", "Côte d'Ivoire", "Croatia", "Cuba", "Cyprus", 
    // "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", 
    // "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", 
    // "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Holy See (Vatican City State)", "Honduras", "Hungary", "Iceland", "India", 
    // "Indonesia", "Iran, Islamic Republic of", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Korea (South)", 
    // "Kuwait", "Kyrgyzstan", "Lao PDR", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macedonia, Republic of", 
    // "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", 
    // "Mozambique", "Myanmar", "Namibia", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", 
    // "Palestinian Territory", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Republic of Kosovo", 
    // "Romania", "Russian Federation", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and Grenadines", "San Marino", 
    // "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Somalia", "South Africa", 
    // "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic (Syria)", 
    // "Taiwan, Republic of China", "Tajikistan", "Tanzania, United Republic of", "Thailand", "Timor-Leste", "Togo", "Trinidad and Tobago", "Tunisia", 
    // "Turkey", "Uganda", "Ukraine", "United Arab Emirates",
    //  "Uruguay", "Uzbekistan", "Venezuela (Bolivarian Republic)", "Viet Nam", "Western Sahara", "Yemen", "Zambia", "Zimbabwe"],
   // loading:false, 
   // error:null,
    items:["Afghanistan", "Albania", "Algeria"],
    selectedCountry: null, 
    showDropdown: false,
    startDate: null,
    endDate: null,
 //   blackCat: 'woof'
}

//reducers for fetching country names array

// const fetchItemsStart=(state, action)=>{
//     return {...state, loading: true}
// }

// const fetchItemsSuccess=(state, action)=>{
//   //  console.log('reducer ', action.items[1].Country);
//      return {...state, items: action.items, loading: false}
//  }

// const fetchItemsFail=(state, action)=>{
//     return{
//         ...state, loading: false, error: action.error
//     }
// }

const selectStartDate=(state, action)=>{
    return {...state, startDate: action.date}
}

const selectEndDate=(state, action)=>{
    return {...state, endDate: action.date}
}

const selectCountry=(state, action)=>{
    return {...state, selectedCountry: action.country}
}

const showDropdown=(state, action)=>{
    console.log('showdropdown reducer');
    return {...state, showDropdown: !state.showDropdown}
}


// const catSpeak=(state, action)=>{
//     return{
//         ...state, blackCat:'meu'
//     }
// }

const reducer=(state=initialState, action)=>{
    switch(action.type){
        // case actionTypes.FETCH_ITEMS_START: return fetchItemsStart(state, action);
        // case actionTypes.FETCH_ITEMS_SUCCESS: return fetchItemsSuccess(state, action);
        // case actionTypes.FETCH_ITEMS_FAIL: return fetchItemsFail(state, action);
        case actionTypes.SELECT_START_DATE: return selectStartDate(state, action);
        case actionTypes.SELECT_END_DATE: return selectEndDate(state, action);
        case actionTypes.SELECT_COUNTRY: return selectCountry(state, action);
        case actionTypes.SHOW_DROPDOWN: return showDropdown(state, action);
   //     case actionTypes.CAT_SPEAK: return catSpeak(state, action);
        default: return state;
    }
}


export default reducer;