import React from "react";
import "./Error.scss";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";

const error = (props) => {
  return (
    <div className="statisticsError">
      <ErrorOutlineIcon className="statisticsErrorIcon" />
      {props.errorMessage}
    </div>
  );
};

export default error;
