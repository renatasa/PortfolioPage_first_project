import React from 'react';
//import Button from '../Button/Button';
import { Button } from '@material-ui/core';
import classes from './ShoppingSummary.scss';
//import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';

const shoppingSummary=(props)=> {
   let itemsInCart=props.items.filter(item=>item.count>0);
   //let cancel=()=>{console.log('this is shoping summary button')}
   let listItemsInCart=itemsInCart.map(item=>
   <div key={item.name}>
       {item.name} : <span class="ItemsAmount">{item.count} kg</span>
   </div>)
//    <button className={classes.testButton}>test button</button>

let submitButton = (<button onClick={props.submitOrder} class="Button"> SUBMIT ORDER</button>) ;

if(props.totalPrice==0){
    submitButton = ( <button onClick={props.submitOrder} class="DisplayNoButton"> lala</button>)
}
  
        return (
            <div>
               <div class="ListItemsInCart"> {listItemsInCart} </div>
               <div class="TotalPrice"> Total price:  {props.totalPrice} € </div>
                <div class="Buttons">
                    <button onClick={props.exitModal} class="Button">CONTINUE SHOPPING</button>
                    {submitButton}
                </div>
            </div>
        )
    }

export default shoppingSummary
