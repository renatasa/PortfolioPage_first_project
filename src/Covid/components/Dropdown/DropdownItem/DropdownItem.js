import React from "react";
import "./DropdownItem.scss";

const dropDownItem = (props) => {
  return (
    <div className="dropdownCountriesSingleItem" onClick={props.clicked}>
      {props.countryName}
    </div>
  );
};

export default dropDownItem;
