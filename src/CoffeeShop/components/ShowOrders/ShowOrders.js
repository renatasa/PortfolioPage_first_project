import React from "react";
import "./ShowOrders.scss";

const showOrders = (props) => {
  let totalPrices = [];
  let orders = [];
  let orderedItems = [];
  orders = Object.values(Object.values(props.allOrders));
  totalPrices = orders.map((order) => order["totalPrice"]);
  orderedItems = orders.map((order) => order["items"]);
  let nameCount = [];

  //loops through all orders
  for (let i = 0; i < orderedItems.length; i++) {
    let sum;

    //loops through individual order
    for (let k = 0; k < orderedItems[i].length; k++) {
      sum += `${orderedItems[i][k].name} : ${orderedItems[i][k].count} kg `;
    }

    nameCount.push(
      <div
        className="allOrders__individualOrder"
        key={Object.keys(props.allOrders)[i]}
      >
        <div className="allOrders__individualOrder-items">
          {" "}
          {sum.slice(9, sum.length)}{" "}
        </div>
        <div className="allOrders__individualOrder-price">
          {" "}
          Total price : {totalPrices[i]} €{" "}
        </div>
      </div>
    );
  }

  return <div className="allOrders">{nameCount}</div>;
};

export default showOrders;
