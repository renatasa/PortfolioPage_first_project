import React from 'react';
import  './CountryData.scss';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index.js';


const countrydata =(props)=> {

    //searching for selected country and startDate object key
    if (props.selectedCountry && props.selectedStartDate && props.allCountriesData.length>0){
        let selectedDateSliced= props.selectedStartDate.slice(1, 11);
        console.log('selected country date ', props.selectedStartDate);
        console.log('selected date sliced ', selectedDateSliced);
        console.log('selected country ', props.selectedCountry);
        console.log(' ');
        let slicedDateToRegExp = new RegExp(selectedDateSliced, "i") ;
        console.log('slicedDateToRegexp ', slicedDateToRegExp);
    for(let key in props.allCountriesData){
        console.log('key countryData ', key);
        console.log(props.allCountriesData[key].Country);
        console.log('selectedCountry ',props.selectedCountry);
        console.log('slicedDateToRegExp ',slicedDateToRegExp);
        console.log('props.allCountriesData[key].Date ',props.allCountriesData[key].Date);
        console.log( slicedDateToRegExp.test(props.allCountriesData[key].Date));
        console.log(props.selectedCountry===props.allCountriesData[key].Country);
        
        if(props.selectedCountry===props.allCountriesData[key].Country && slicedDateToRegExp.test(props.allCountriesData[key].Date) ){
            console.log('testing all countries found match country and date ', props.allCountriesData[key].Country, key);
          //  selectedCountryKey=key;
             props.onsetSelectCountryKey(key);
        }
        }
    }

    //searching for selected country and end date object key
    if (props.selectedCountry && props.selectedStartDate && props.allCountriesData.length>0 && props.selectedEndDate){
        let selectedEndDateSliced= props.selectedEndDate.slice(1, 11);
        console.log('selectedEndDate from CountryData ', props.selectedEndDate);
        let slicedDateToRegExp = new RegExp(selectedEndDateSliced, "i") ;
        let key = props.selectCountryKey ;
    for( key in props.allCountriesData){
        if(props.selectedCountry===props.allCountriesData[key].Country && slicedDateToRegExp.test(props.allCountriesData[key].Date) ){
            console.log('testing all countries found match country and END date ', props.allCountriesData[key].Country);
          console.log('selectedCountryEndDateKey from countryData ', key)
             props.onsetSelectCountryEndDateKey(key);
        }
        }
    }


    let selectedCountryInfoStart=null;
    let selectedCountryInfoEnd=null;

    let displayData=(country, selectedDate, confirmed, deaths, recovered, active, mortality)=>{
        return(
            
            <div className="Country_data_table" >

            <div className={"Country_data_table-row Country_data_table-row-top" }>
                 <div className="Country_data_table-cell Country_data_table-propertyCell">Country</div>
                 <div className="Country_data_table-cell Country_data_table-valueCell">{country}</div>
            </div>
            <div className="Country_data_table-row">
                 <div className="Country_data_table-cell Country_data_table-propertyCell">Date</div>
                 <div className="Country_data_table-cell Country_data_table-valueCell">{selectedDate.slice(0, 10)}</div>
            </div>
            <div className="Country_data_table-row">
                 <div className="Country_data_table-cell Country_data_table-propertyCell">Confirmed</div>
                 <div className="Country_data_table-cell Country_data_table-valueCell">{confirmed}</div>
            </div>
            <div className="Country_data_table-row">
                 <div className="Country_data_table-cell Country_data_table-propertyCell">Deaths</div>
                 <div className="Country_data_table-cell Country_data_table-valueCell">{deaths}</div>
            </div>
            <div className="Country_data_table-row">
                 <div className="Country_data_table-cell Country_data_table-propertyCell">Active</div>
                 <div className="Country_data_table-cell Country_data_table-valueCell">{active}</div>
            </div>
            <div className="Country_data_table-row">
                 <div className="Country_data_table-cell Country_data_table-propertyCell">Recovered</div>
                 <div className="Country_data_table-cell Country_data_table-valueCell">{recovered}</div>
            </div>
            <div className="Country_data_table-row-bottom">
                 <div className="Country_data_table-cell Country_data_table-propertyCell">Mortality rate</div>
                 <div className="Country_data_table-cell Country_data_table-valueCell">{(mortality*100).toFixed(2)} %</div>
            </div>

        </div>  
        
        )
    }
    if (props.selectedCountryKey){
        let a= props.allCountriesData[props.selectedCountryKey].Country; 
        let b= props.allCountriesData[props.selectedCountryKey].Date; 
        let c= props.allCountriesData[props.selectedCountryKey].Confirmed; 
        let d= props.allCountriesData[props.selectedCountryKey].Deaths;
        let e= props.allCountriesData[props.selectedCountryKey].Active; 
        let f= props.allCountriesData[props.selectedCountryKey].Recovered; 
        let g= props.allCountriesData[props.selectedCountryKey].Mortality

        selectedCountryInfoStart=displayData(a, b, c, d, e, f, g  ) ;

    }

    if (props.selectedCountryEndDateKey){
            let a= props.allCountriesData[props.selectedCountryEndDateKey].Country; 
            let b= props.allCountriesData[props.selectedCountryEndDateKey].Date; 
            let c= props.allCountriesData[props.selectedCountryEndDateKey].Confirmed; 
            let d= props.allCountriesData[props.selectedCountryEndDateKey].Deaths;
            let e= props.allCountriesData[props.selectedCountryEndDateKey].Active; 
            let f= props.allCountriesData[props.selectedCountryEndDateKey].Recovered; 
            let g= props.allCountriesData[props.selectedCountryEndDateKey].Mortality
    
            selectedCountryInfoEnd=displayData(a, b, c, d, e, f, g  ) ;
              
    }

        return (
            <div>
               {selectedCountryInfoStart}
               {selectedCountryInfoEnd}
            </div>
        )
    
}

const mapStateToProps=state=>{
    return{
        selectedCountry: state.countriesReducer.selectedCountry, 
        selectedStartDate: state.countriesReducer.startDate,
        selectedEndDate: state.countriesReducer.endDate,
        selectedCountryKey: state.allCountriesDataReducer.selectedCountryKey,
        selectedCountryEndDateKey: state.allCountriesDataReducer.selectedCountryEndDateKey,
        allCountriesData: state.allCountriesDataReducer.allCountriesData,
        loadingAllData: state.allCountriesDataReducer.loadingAllData
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        onsetSelectCountryKey: (key)=>dispatch(actions.selectCountryKey(key)) , 
        onsetSelectCountryEndDateKey: (key)=>dispatch(actions.selectCountryEndDateKey(key))
        //oncatSpeak: ()=>dispatch(actions.catSpeak())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(countrydata)
