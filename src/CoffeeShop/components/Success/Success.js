import React from "react";
import "./Success.scss";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

const success = () => {
  return (
    <div className="orderSuccess">
      <CheckCircleOutlineIcon className="orderSuccess-icon" />
      Thank you for your order!
    </div>
  );
};

export default success;
