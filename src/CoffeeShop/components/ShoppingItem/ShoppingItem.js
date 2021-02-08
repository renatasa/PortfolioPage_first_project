import React from "react";
import { Button } from "@material-ui/core";
import "./ShoppingItem.scss";
import ShoppingItemImg from "../ShoppingItemImg/ShoppingItemImg";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";

const shoppingItem = (props) => {
  return (
    <div className="row">
      <div className="row__item">
        <div className="row__item__logo">
          <ShoppingItemImg name={props.name} />
        </div>
        <h3 className="heading-3"> {props.name} </h3>
        <div className="row__item__itemDescription">{props.description}</div>
        <div className="row__item__priceCount">
          <h4 className="heading-4">€/kg: {props.price}</h4>
          <h4 className="heading-4">kg: {props.count}</h4>
        </div>
        <div className="row__item__buttons">
          <Button onClick={props.removeItem}>
            <RemoveCircleOutlineIcon className="row__item__buttons-removeIcon" />
          </Button>
          <Button onClick={props.addItem}>
            <AddCircleOutlineIcon className="row__item__buttons-addIcon" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default shoppingItem;
