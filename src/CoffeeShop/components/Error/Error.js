import React from "react";
import "./Error.scss";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";

const error = (props) => {
  return (
    <div className="ErrorCoffee">
      <ErrorOutlineIcon className="ErrorCoffee__icon" />
      {props.errorMessage}
    </div>
  );
};

export default error;
