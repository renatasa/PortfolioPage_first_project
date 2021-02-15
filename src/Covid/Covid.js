import React, { Component } from "react";
import { connect } from "react-redux";
import "./Covid.scss";
import * as actions from "./store/actions/index.js";
import Dropdown from "./components/Dropdown/Dropdown.js";
import CalendarForStartDate from "./components/Calendar/CalendarForStartDate.js";
import CalendarForEndDate from "./components/Calendar/CalendarForEndDate.js";
import CountryData from "./components/CountryData/CountryData.js";
import ConfirmedRecoveredDeathChart from "./components/Charts/ConfirmedRecoveredDeathChart";
import CasesForSelectedTimeInterval from "./components/Charts/CasesForSelectedTimeInterval.js";
import CovidSpinner from "./components/CovidSpinner/CovidSpinner.js";
import Error from "./components/Error/Error.js";

export class Covid extends Component {
  componentDidMount() {
    this.props.onLoadAllCountriesData();
  }

  render() {
    let calendarForEndDate = null;
    if (this.props.startDate) {
      calendarForEndDate = <CalendarForEndDate />;
    }

    //axios ERROR handling
    let dropdownAndCalendars = null;
    if (this.props.allCountriesData.length === 0 && this.props.loadingAllData) {
      dropdownAndCalendars = <CovidSpinner />;
    } else if (
      this.props.allCountriesData.length > 0 &&
      this.props.error == null &&
      !this.props.loadingAllData
    ) {
      dropdownAndCalendars = (
        <div className="Covid_dropdownCalendar">
          <div className="Covid_dropdownCalendar_item">
            {" "}
            <Dropdown />{" "}
          </div>
          <div className="Covid_dropdownCalendar_item">
            {" "}
            <CalendarForStartDate />{" "}
          </div>
          {calendarForEndDate}
        </div>
      );
    } else if (
      this.props.error !== null &&
      !this.props.loadingAllData &&
      this.props.allCountriesData.length === 0
    ) {
      dropdownAndCalendars = <Error errorMessage={this.props.errorMsg} />;
    }

    //axios ERROR handling end

    let confirmedRecoveredDeathChart = null;
    let allCasesForSelectedInterval = null;
    let deathToCaseRatioChart = null;

    if (this.props.selectedCountryKey) {
      confirmedRecoveredDeathChart = <ConfirmedRecoveredDeathChart />;
    }

    //created arrays of recovered confirmed death active cases for selected country and selected time period
    if (
      this.props.startDate &&
      this.props.endDate &&
      this.props.selectedCountryKey &&
      this.props.selectedCountryEndDateKey
    ) {
      let recovered = [];
      let death = [];
      let active = [];
      let confirmed = [];
      let deathToCase = [];
      let selectedDates = [];
      let sum = 0;

      let b = this.props.selectedCountryEndDateKey;

      let a = this.props.selectedCountryKey;
      for (let i = a; i < b; i++) {
        sum = sum + 1;
        recovered.push(this.props.allCountriesData[i].Recovered);
        active.push(this.props.allCountriesData[i].Active);
        death.push(this.props.allCountriesData[i].Deaths);
        confirmed.push(this.props.allCountriesData[i].Confirmed);
        deathToCase.push(this.props.allCountriesData[i].Mortality);
        selectedDates.push(this.props.allCountriesData[i].Date.slice(0, 10));
      }

      allCasesForSelectedInterval = (
        <CasesForSelectedTimeInterval
          death={death}
          confirmed={confirmed}
          recovered={recovered}
          active={active}
          deathToCase={deathToCase}
          selectedDates={selectedDates}
          chosenDataSet="allCases"
        />
      );

      deathToCaseRatioChart = (
        <CasesForSelectedTimeInterval
          death={death}
          confirmed={confirmed}
          recovered={recovered}
          active={active}
          deathToCase={deathToCase}
          selectedDates={selectedDates}
          chosenDataSet="deathToCases"
        />
      );
    }

    return (
      <div className="Covid">
        <div>{dropdownAndCalendars}</div>
        <div className="Covid-countryTables">
          <CountryData />
        </div>
        <div className="Covid-charts">
          {confirmedRecoveredDeathChart}
          {allCasesForSelectedInterval}
          {deathToCaseRatioChart}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    allCountriesData: state.allCountriesDataReducer.allCountriesData,
    loadingAllData: state.allCountriesDataReducer.loadingAllData,
    startDate: state.countriesReducer.startDate,
    endDate: state.countriesReducer.endDate,
    selectedCountryKey: state.allCountriesDataReducer.selectedCountryKey,
    selectedCountryEndDateKey:
      state.allCountriesDataReducer.selectedCountryEndDateKey,
    errorMsg: state.allCountriesDataReducer.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadAllCountriesData: () => dispatch(actions.loadAllData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Covid);
