import * as actionTypes from "./actionTypes";

export const selectStartDate = (date) => {
  return {
    type: actionTypes.SELECT_START_DATE,
    date: date,
  };
};

export const selectEndDate = (date) => {
  return {
    type: actionTypes.SELECT_END_DATE,
    date: date,
  };
};

export const selectCountry = (country) => {
  return {
    type: actionTypes.SELECT_COUNTRY,
    country: country,
  };
};

export const showDropdown = () => {
  return {
    type: actionTypes.SHOW_DROPDOWN,
  };
};
