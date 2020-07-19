import React from 'react';
import { Line} from 'react-chartjs-2';
import {connect} from 'react-redux';
import Spinner from '../Spinner/Spinner';

const deathToCaseRatioChart=(props)=>{
  let defaultProps={
    displayTitle: true, 
    displayLegend: true, 
    legendPosition: 'right'    
}

      let lineChart=<Spinner/>

      if(props.deathToCase){
          lineChart=(
            <Line
            data={  {
              labels: props.selectedDates, 
              datasets: [
                  {
                      label: ['Death-to-case-ratio'],
                      data: props.deathToCase, 
                      borderColor:[
                        'rgba(153, 102, 255, 0.6)'  , 
                      ]
                  }
              ]
          } }
            options={{
              title:{
                display: defaultProps.displayTitle,
              //  text:'Confirmed cases '+this.props.allCountriesData[this.props.selectedCountryKey].Date+' - '+this.props.allCountriesData[this.props.selectedCountryEndDateKey].Date+this.props.allCountriesData[this.props.selectCountryKey].Country,
              text:''+props.allCountriesData[props.selectedCountryKey].Country+' '+props.allCountriesData[props.selectedCountryKey].Date.slice(0, 10)+' - '+props.allCountriesData[props.selectedCountryEndDateKey].Date.slice(0, 10),  
              fontSize:25
              },
              legend:{
                display: defaultProps.displayLegend,
                position: defaultProps.legendPosition
              }
            }}
          />
          )
      }
    
        return (
            <div className="chart">
                {lineChart}
            </div>
          )
      }

const mapStateToProps=state=>{
    return{
        selectedCountry: state.countriesReducer.selectedCountry, 
        selectedCountryKey: state.allCountriesDataReducer.selectedCountryKey,
        selectedCountryEndDateKey: state.allCountriesDataReducer.selectedCountryEndDateKey,
        allCountriesData: state.allCountriesDataReducer.allCountriesData,
        loadingAllData: state.allCountriesDataReducer.loadingAllData
    }
}

export default connect(mapStateToProps)(deathToCaseRatioChart) 
