import React from "react";
import "./ShoppingSummary.scss";

const shoppingSummary = (props) => {
  let itemsInCart = props.items.filter((item) => item.count > 0);
  let listItemsInCart = itemsInCart.map((item) => (
    <div key={item.name}>
      {item.name} :{" "}
      <span className="shoppingSummary-items">{item.count} kg</span>
    </div>
  ));

  let submitButton = (
    <button
      onClick={props.submitOrder}
      className="shoppingSummaryPrice__buttons-button"
    >
      {" "}
      SUBMIT ORDER
    </button>
  );

  if (props.totalPrice === 0) {
    submitButton = (
      <button
        onClick={props.submitOrder}
        className="shoppingSummaryPrice__buttons-noButton"
      >
        submit
      </button>
    );
  }

  return (
    <div>
      <div className="shoppingSummary"> {listItemsInCart} </div>
      <div className="shoppingSummaryPrice">

        Total price: {props.totalPrice} €
      </div>
      <div className="shoppingSummaryPrice__buttons">
        <button
          onClick={props.exitModal}
          className="shoppingSummaryPrice__buttons-button"
        >
          CONTINUE SHOPPING
        </button>
        {submitButton}
      </div>
    </div>
  );
};

export default shoppingSummary;
