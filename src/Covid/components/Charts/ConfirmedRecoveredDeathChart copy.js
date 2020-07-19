import React from 'react';
import { Bar } from 'react-chartjs-2';
import {connect} from 'react-redux';
import Spinner from '../Spinner/Spinner';

const confirmedRecoveredDeactChart=(props)=> {
  let defaultProps={
    displayTitle: true, 
    displayLegend: false, 
   // legendPosition: 'right'    
}
      let barChart=<Spinner/>;

      if (
            props.allCountriesData[props.selectedCountryKey].Active &&
            props.allCountriesData[props.selectedCountryKey].Recovered &&
            props.allCountriesData[props.selectedCountryKey].Confirmed &&
            props.allCountriesData[props.selectedCountryKey].Deaths 
            ){
        barChart= (
          <Bar
              data={ {
                labels: ['Active', 'Recovered', 'Confirmed', 'Deaths'], 
                datasets: [
                    {
                        label: props.selectedCountry,
                        data:[
                         
                          props.allCountriesData[props.selectedCountryKey].Active,
                          props.allCountriesData[props.selectedCountryKey].Recovered,
                          props.allCountriesData[props.selectedCountryKey].Confirmed,
                          props.allCountriesData[props.selectedCountryKey].Deaths,
                        ], 
                        backgroundColor:[
                          'rgba(255, 159, 64, 0.6)' ,
                          'rgba(75, 192, 192, 0.6)', 
                          'rgba(255, 99, 132, 0.6)',
                          'rgba(153, 102, 255, 0.6)'
                        ]
                    }
                ]
            }}
              options={{
                title:{
                  display: defaultProps.displayTitle,
                  text: props.allCountriesData[props.selectedCountryKey].Country+' '+props.selectedDate.slice(1,11),
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
              {barChart}

            </div>
          )
      }


const mapStateToProps=state=>{
    return{
        selectedCountry: state.countriesReducer.selectedCountry, 
        selectedDate: state.countriesReducer.startDate,
        selectedCountryKey: state.allCountriesDataReducer.selectedCountryKey,
        allCountriesData: state.allCountriesDataReducer.allCountriesData,
        loadingAllData: state.allCountriesDataReducer.loadingAllData
    }
}

export default connect(mapStateToProps)(confirmedRecoveredDeactChart) 