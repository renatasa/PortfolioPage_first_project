import * as actionTypes from "../actions/actionTypes";

let initialState = {
  items: ["Afghanistan", "Albania", "Algeria"],
  selectedCountry: null,
  showDropdown: false,
  startDate: null,
  endDate: null,
};

const selectStartDate = (state, action) => {
  return { ...state, startDate: action.date };
};

const selectEndDate = (state, action) => {
  return { ...state, endDate: action.date };
};

const selectCountry = (state, action) => {
  return { ...state, selectedCountry: action.country };
};

const showDropdown = (state, action) => {
  return { ...state, showDropdown: !state.showDropdown };
};

const reducer=(state=initialState, action)=>{
    switch(action.type){
        case actionTypes.SELECT_START_DATE: return selectStartDate(state, action);
        case actionTypes.SELECT_END_DATE: return selectEndDate(state, action);
        case actionTypes.SELECT_COUNTRY: return selectCountry(state, action);
        case actionTypes.SHOW_DROPDOWN: return showDropdown(state, action);
        default: return state;
    }
}

export default reducer;
