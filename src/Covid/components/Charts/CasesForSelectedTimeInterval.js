import React from "react";
import { Line } from "react-chartjs-2";
import { connect } from "react-redux";
import CovidSpinner from "../../components/CovidSpinner/CovidSpinner";

const casesForSelectedTimeInterval = (props) => {
  let defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: "right",
  };

  let confirmedRecoveredDeathActiveDataSet = {
    labels: props.selectedDates,
    datasets: [
      {
        label: ["confirmed"],
        data: props.confirmed,
        borderColor: ["rgba(255, 99, 132, 0.6)"],
      },
      {
        label: ["deaths"],
        data: props.death,
        borderColor: ["rgba(153, 102, 255, 0.6)"],
      },
      {
        label: ["active"],
        data: props.active,
        borderColor: ["rgba(255, 159, 64, 0.6)"],
      },
      {
        label: ["recovered"],
        data: props.recovered,
        borderColor: ["rgba(75, 192, 192, 0.6)"],
      },
    ],
  };

  let deathToCaseDataSet = {
    labels: props.selectedDates,
    datasets: [
      {
        label: ["Death-to-case-ratio"],
        data: props.deathToCase,
        borderColor: ["rgba(153, 102, 255, 0.6)"],
      },
    ],
  };

  let chosenDataSet = null;
  if (props.chosenDataSet === "allCases") {
    chosenDataSet = confirmedRecoveredDeathActiveDataSet;
  }

  if (props.chosenDataSet === "deathToCases") {
    chosenDataSet = deathToCaseDataSet;
  }

  let lineChart = <CovidSpinner />;

  if (
    props.confirmed &&
    props.recovered &&
    props.death &&
    props.active &&
    props.deathToCase
  ) {
    lineChart = (
      <Line
        data={chosenDataSet}
        options={{
          title: {
            display: defaultProps.displayTitle,
            text:
              "" +
              props.allCountriesData[props.selectedCountryKey].Country +
              " " +
              props.allCountriesData[props.selectedCountryKey].Date.slice(
                0,
                10
              ) +
              " - " +
              props.allCountriesData[
                props.selectedCountryEndDateKey
              ].Date.slice(0, 10),
            fontSize: 25,
          },
          legend: {
            display: defaultProps.displayLegend,
            position: defaultProps.legendPosition,
          },
        }}
      />
    );
  }

  return <div className="chart">{lineChart}</div>;
};

const mapStateToProps = (state) => {
  return {
    selectedCountry: state.countriesReducer.selectedCountry,
    selectedCountryKey: state.allCountriesDataReducer.selectedCountryKey,
    selectedCountryEndDateKey:
      state.allCountriesDataReducer.selectedCountryEndDateKey,
    allCountriesData: state.allCountriesDataReducer.allCountriesData,
    loadingAllData: state.allCountriesDataReducer.loadingAllData,
  };
};

export default connect(mapStateToProps)(casesForSelectedTimeInterval);
