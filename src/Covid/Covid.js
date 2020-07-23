import React, { Component } from 'react';
import {connect} from 'react-redux';
import './Covid.scss';
import * as actions from './store/actions/index.js';
import Dropdown from './components/Dropdown/Dropdown.js';
import CalendarForStartDate from './components/Calendar/CalendarForStartDate.js';
import CalendarForEndDate from './components/Calendar/CalendarForEndDate.js';
import CountryData from './components/CountryData/CountryData.js';
import ConfirmedRecoveredDeathChart from './components/Charts/ConfirmedRecoveredDeathChart';
import CasesForSelectedTimeInterval from './components/Charts/CasesForSelectedTimeInterval.js';
import DeathToCaseRatioChart from './components/Charts/DeathToCaseRatioChart.js';
import CovidSpinner from './components/CovidSpinner/CovidSpinner.js';
import Error from './components/Error/Error.js';

export class Covid extends Component {

    componentDidMount(){
    //   this.props.onFetchItems();
       this.props.onLoadAllCountriesData();

}

 
    render() {

    let calendarForEndDate=null;
    if (this.props.startDate){
        calendarForEndDate= <CalendarForEndDate/>
    }


    //axios ERROR handling
    let dropdownAndCalendars= null;
    if ( this.props.allCountriesData.length===0  && this.props.loadingAllData ){
        dropdownAndCalendars = <CovidSpinner/>
    }  else if(this.props.allCountriesData.length>0 && this.props.error==null && !this.props.loadingAllData ){
        dropdownAndCalendars= <div class="Covid_dropdownCalendar"> 
                                   <div class="Covid_dropdownCalendar_item"> <Dropdown/> </div>
                                   <div class="Covid_dropdownCalendar_item"> <CalendarForStartDate/> </div>
                                   { calendarForEndDate}
                              </div>
        
    } else if(this.props.error!==null &&  !this.props.loadingAllData && this.props.allCountriesData.length===0 ){
        dropdownAndCalendars=<Error errorMessage={this.props.errorMsg}/>
    }
    
 
    //axios ERROR handling end



    let confirmedRecoveredDeathChart =null;
    let casesForSelectedInterval=null;
    let deathToCaseRatioChart=null;
    
    if (this.props.selectedCountryKey){
        confirmedRecoveredDeathChart= <ConfirmedRecoveredDeathChart/>
    }

    //created arrays of recovered confirmed death active cases for selected country and selected time period
    if ( this.props.startDate && this.props.endDate && this.props.selectedCountryKey && this.props.selectedCountryEndDateKey ){
        let recovered=[];
        let death=[];
        let active=[];
        let confirmed=[];
        let deathToCase=[];
        let selectedDates=[];
        let sum=0;

       let b=this.props.selectedCountryEndDateKey;

       let a=this.props.selectedCountryKey;
        for (let i=a; i<b; i++){
            sum=sum+1;
            recovered.push(this.props.allCountriesData[i].Recovered);
            active.push(this.props.allCountriesData[i].Active);
            death.push(this.props.allCountriesData[i].Deaths);
            confirmed.push(this.props.allCountriesData[i].Confirmed);
            deathToCase.push(this.props.allCountriesData[i].Mortality);
            selectedDates.push(this.props.allCountriesData[i].Date.slice(0, 10));

            }

            casesForSelectedInterval=(<CasesForSelectedTimeInterval
                death={death}
                confirmed={confirmed}
                recovered={recovered}
                active={active}
                selectedDates={selectedDates}
            />)

            deathToCaseRatioChart=(<DeathToCaseRatioChart
                deathToCase={deathToCase}
                selectedDates={selectedDates}
            />)
    }

 
        return (
            <div class="Covid">
                {dropdownAndCalendars}
                <div class="Covid-countryTables"><CountryData/></div>
                <div class="Covid-charts">
                {confirmedRecoveredDeathChart}
                {casesForSelectedInterval}
                {deathToCaseRatioChart}
            </div>
                
            </div>
        )
    }
}

const mapStateToProps=state=>{
    return{
        items: state.countriesReducer.items, 
        loading: state.countriesReducer.loading, 
        allCountriesData: state.allCountriesDataReducer.allCountriesData,
        loadingAllData: state.allCountriesDataReducer.loadingAllData,
        selectedCountry: state.countriesReducer.selectedCountry,
        startDate: state.countriesReducer.startDate,
        endDate: state.countriesReducer.endDate,
        selectedCountryKey: state.allCountriesDataReducer.selectedCountryKey,
        selectedCountryEndDateKey: state.allCountriesDataReducer.selectedCountryEndDateKey,
        errorMsg: state.allCountriesDataReducer.error
     //   blackCat: state.countriesReducer.blackCat
    }
}

const mapDispatchToProps=dispatch=>{
    return{
     //   onFetchItems: ()=>dispatch(actions.fetchItems()), 
        onLoadAllCountriesData: ()=>dispatch(actions.loadAllData()),
     //   oncatSpeak: ()=>dispatch(actions.catSpeak())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Covid)
