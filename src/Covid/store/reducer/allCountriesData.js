import * as actionTypes from '../actions/actionTypes';

let initialState = {
    allCountriesData: [],  
    loadingAllData: null,
    selectedCountryKey: null,
    selectedCountryEndDateKey: null,
    error:null
}


const loadingDataStart=(state, action)=>{
    console.log('allcountriesdata reducer ', state.allCountriesData);
    return {...state,  loadingAllData: true}
}

const loadingDataSuccess=(state, action)=>{
    return {...state, allCountriesData: action.allCountriesData, loadingAllData: false}
}

const loadingDataFail=(state, action)=>{
    console.log(action.error)
    return {...state, loadingAllData: false, error: action.error}
}

const selectCountryKey=(state, action)=>{
    console.log('allcountriesdata reducer ', state.allCountriesData);
    return {...state, selectedCountryKey: action.key}
}

const selectCountryEndDateKey=(state, action)=>{
    return {...state, selectedCountryEndDateKey: action.key2}
}



const allCountriesData=(state=initialState, action)=>{
    switch(action.type){
        case actionTypes.LOADING_DATA_START: return loadingDataStart(state, action);
        case actionTypes.LOADING_DATA_SUCCESS: return loadingDataSuccess(state, action);
        case actionTypes.LOADING_DATA_FAIL: return loadingDataFail(state, action);
        case actionTypes.SELECT_COUNTRY_KEY: return selectCountryKey(state, action);
        case actionTypes.SELECT_COUNTRY_END_DATE_KEY: return selectCountryEndDateKey(state, action);
        default: return state;
    }
}


export default allCountriesData;