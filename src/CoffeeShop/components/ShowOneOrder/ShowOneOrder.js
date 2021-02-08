import React from "react";
import "./ShowOneOrder.scss";

const showOneOrder = (props) => {
  return (
    <div>
      <p className="showOneOrderItem">
        {" "}
        {props.name} : {props.count}
      </p>
    </div>
  );
};

export default showOneOrder;
