import * as actionTypes from './actionTypes';
import axios from 'axios';

export const loadingDataStart=()=>{
    return{
        type: actionTypes.LOADING_DATA_START
    }
}

export const loadingDataSuccess=(fetchedItems)=>{
    console.log('allcountriesdata action  fetched items', fetchedItems)
    return{
        type: actionTypes.LOADING_DATA_SUCCESS,
        allCountriesData: fetchedItems, 
    }
}

export const loadingDataFail=(error)=>{
    return{
        type: actionTypes.LOADING_DATA_FAIL, 
        error: error
    }
}

export const loadAllData=()=>{
    return dispatch=>{
        dispatch(loadingDataStart());
    axios.get(process.env.REACT_APP_API_GET_STATISTICS)
    .then(response=>{
        console.log('coviddemo ', response.data)
        const fetchedItems=[];
        let countryIndexArr=[];
        countryIndexArr[0]=`${response.data[0].Country}-start` ;
        console.log('axios from test ', response.data[1].Country );

        let counter=0;

        for (let key in response.data){
            console.log('response data key ', response.data[key]);
            if(response.data[key].Country !=="United States of America" && response.data[key].Country !=="United Kingdom") {
                counter= counter+1;
                if(response.data[key].Deaths>0){
               fetchedItems.push({
                    ...response.data[key], 
                    id:counter,
                    Mortality: response.data[key].Deaths/response.data[key].Confirmed 
                })

            } else if(response.data[key].Deaths ===0){
                    fetchedItems.push({
                        ...response.data[key], 
                        id:key,
                        Mortality: 0
                    })

                }

            } 
        }
        console.log('fetcheditems ', fetchedItems)
        dispatch(loadingDataSuccess(fetchedItems));
    })
    .catch(error=>{
        console.log(error.message);
        dispatch(loadingDataFail(error.message));
    })

}
}

export const selectCountryKey=(key)=>{
 console.log('selectCountryKey action key', key);
    return {
        type: actionTypes.SELECT_COUNTRY_KEY, 
        key:key
    }
}

export const selectCountryEndDateKey=(key)=>{
  //  console.log('selectCountryEndDateKey action');
    return {
        type: actionTypes.SELECT_COUNTRY_END_DATE_KEY, 
        key2:key
    }
}