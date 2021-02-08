import React from "react";
import ShoppingItemImg from "../ShoppingItemImg/ShoppingItemImg";
import "./TodaySpecial.scss";

const TodaysSpecial = (props) => {
  return (
    <div className="TodaySpecial">
      <div className="TodaySpecial__item">
        <div className="TodaySpecial__item__logo">
          <ShoppingItemImg name={"Sandwitch"} />
          <h3 className="TodaySpecial__item-title"> Sandwitch </h3>
        </div>
      </div>

      <p className="TodaySpecial__item-plus">+</p>

      <div className="TodaySpecial__item">
        <div className="TodaySpecial__item__logo">
          <ShoppingItemImg name={"Cake"} />
          <h3 className="TodaySpecial__item-title"> Dessert </h3>
        </div>
      </div>

      <p className="TodaySpecial__item-plus">+</p>

      <div className="TodaySpecial__item">
        <div className="TodaySpecial__item__logo">
          <ShoppingItemImg name={"Coffee"} />
          <h3 className="TodaySpecial__item-title"> Coffee </h3>
          <div className="TodaySpecial__item-free"> FREE </div>
        </div>
      </div>
    </div>
  );
};

export default TodaysSpecial;
