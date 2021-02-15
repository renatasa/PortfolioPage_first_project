import React from "react";
import "./CountryData.scss";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index.js";

const countrydata = (props) => {
  // searching for selected object key (startDate or endDate) in allCountriesData array
  let findKey = (selectedDate, selectKey) => {
    let selectedDateSliced = selectedDate.slice(1, 11);
    let slicedDateToRegExp = new RegExp(selectedDateSliced, "i");
    for (let key in props.allCountriesData) {
      if (
        props.selectedCountry === props.allCountriesData[key].Country &&
        slicedDateToRegExp.test(props.allCountriesData[key].Date)
      ) {
        selectKey(key);
      }
    }
  };

  // searching for selected country and startDate object key
  if (
    props.selectedCountry &&
    props.selectedStartDate &&
    props.allCountriesData.length > 0
  ) {
    findKey(props.selectedStartDate, props.onsetSelectCountryKey);
  }

  // searching for selected country and end date object key
  if (
    props.selectedCountry &&
    props.selectedStartDate &&
    props.allCountriesData.length > 0 &&
    props.selectedEndDate
  ) {
    findKey(props.selectedEndDate, props.onsetSelectCountryEndDateKey);
  }

  let selectedCountryInfoStart = null;
  let selectedCountryInfoEnd = null;

  let displayData = (propertyNamesArr, dataArr, startOrEndTable) => {
    let rows = [];
    for (let i = 0; i < propertyNamesArr.length; i++) {
      rows.push(
        <div className="Country_data_table-row" key={i}>
          <div className="Country_data_table-cell Country_data_table-propertyCell">
            {propertyNamesArr[i]}
          </div>
          <div className="Country_data_table-cell Country_data_table-valueCell">
            {dataArr[i]}
          </div>
        </div>
      );
    }

    if (startOrEndTable === "selectedCountryInfoStart") {
      selectedCountryInfoStart = (
        <div className="Country_data_table">{rows}</div>
      );
    }

    if (startOrEndTable === "selectedCountryInfoEnd") {
      selectedCountryInfoEnd = <div className="Country_data_table">{rows}</div>;
    }
  };

  // preparing data before displaying in tables
  let prepareData = (startOrEndDateKey, startOrEndTable) => {
    let propertyNamesArr = [
      "Country",
      "Date",
      "Confirmed",
      "Deaths",
      "Active",
      "Recovered",
      "Mortality",
    ];
    let dataArray = [
      props.allCountriesData[startOrEndDateKey].Country,
      props.allCountriesData[startOrEndDateKey].Date.slice(0, 10),
      props.allCountriesData[startOrEndDateKey].Confirmed,
      props.allCountriesData[startOrEndDateKey].Deaths,
      props.allCountriesData[startOrEndDateKey].Active,
      props.allCountriesData[startOrEndDateKey].Recovered,
      (props.allCountriesData[startOrEndDateKey].Mortality * 100).toFixed(2) +
        " %",
    ];

    displayData(propertyNamesArr, dataArray, startOrEndTable);
  };

  if (props.selectedCountryKey) {
    prepareData(props.selectedCountryKey, "selectedCountryInfoStart");
  }

  if (props.selectedCountryEndDateKey) {
    prepareData(props.selectedCountryEndDateKey, "selectedCountryInfoEnd");
  }

  return (
    <div>
      {selectedCountryInfoStart}
      {selectedCountryInfoEnd}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedCountry: state.countriesReducer.selectedCountry,
    selectedStartDate: state.countriesReducer.startDate,
    selectedEndDate: state.countriesReducer.endDate,
    selectedCountryKey: state.allCountriesDataReducer.selectedCountryKey,
    selectedCountryEndDateKey:
      state.allCountriesDataReducer.selectedCountryEndDateKey,
    allCountriesData: state.allCountriesDataReducer.allCountriesData,
    loadingAllData: state.allCountriesDataReducer.loadingAllData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onsetSelectCountryKey: (key) => dispatch(actions.selectCountryKey(key)),
    onsetSelectCountryEndDateKey: (key) =>
      dispatch(actions.selectCountryEndDateKey(key)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(countrydata);
