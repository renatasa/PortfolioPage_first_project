import React from 'react';
import ShoppingItemImg from '../ShoppingItemImg/ShoppingItemImg';
import  './TodaySpecial.scss';

const TodaysSpecial =(props)=> {
    
        return (
            <div class="TodaySpecial">
                <div class="TodaySpecial__item">
                    <div class="TodaySpecial__item__logo">
                        <ShoppingItemImg name={'Sandwitch'} />
                        <h3 class="TodaySpecial__item-title" >  Sandwitch  </h3>
                    </div>
                </div>

                <p class="TodaySpecial__item-plus">+</p>

                <div class="TodaySpecial__item">
                    <div class="TodaySpecial__item__logo">
                        <ShoppingItemImg  name={'Cake'} />
                        <h3 class="TodaySpecial__item-title">  Dessert  </h3>
                    </div>
                        
                </div>

                <p class="TodaySpecial__item-plus">+</p>

                <div class="TodaySpecial__item">
                    <div class="TodaySpecial__item__logo">
                        <ShoppingItemImg name={'Coffee'}/>
                    <h3 class="TodaySpecial__item-title">  Coffee  </h3>
                    <div class="TodaySpecial__item-free"> FREE  </div>
                    </div>

                </div>

            </div>
        )
    }

export default TodaysSpecial ;
