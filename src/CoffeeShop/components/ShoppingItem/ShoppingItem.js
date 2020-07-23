import React from 'react';
import { Button } from '@material-ui/core';
import  './ShoppingItem.scss';
import iconButtonClass from './ShoppingItemButton.module.css';
import ShoppingItemImg from '../ShoppingItemImg/ShoppingItemImg';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';

const shoppingItem=(props)=>{
        return (  
            <div class="row">
            <div class="row__Item">
                   <div class="row__Item__logo">
                        <ShoppingItemImg name={props.name}/>
                    </div>
                <h3 class="heading-3"> {props.name} </h3>
                <div class="row__Item__itemDescription">{props.description}</div>
                <div class="row__Item__priceCount">
                    <h4 class="heading-4">€/kg: {props.price}</h4>
                    <h4 class="heading-4">kg: {props.count}</h4>
                </div>
                <div class="Buttons">
                     <Button onClick={props.removeItem}><RemoveCircleOutlineIcon className={iconButtonClass.RemoveIcon}/></Button>
                     <Button onClick={props.addItem} ><AddCircleOutlineIcon className={iconButtonClass.AddIcon}/></Button>
                </div>
            </div>     
            </div>
        )
    }

export default shoppingItem
