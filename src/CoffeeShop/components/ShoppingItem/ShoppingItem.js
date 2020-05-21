import React from 'react';
import { Button } from '@material-ui/core';
import classes from './ShoppingItem.scss';
import addButtonClass from './ShoppingItemButton.module.css';
import ShoppingItemImg from '../ShoppingItemImg/ShoppingItemImg';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';

const shoppingItem=(props)=>{
   // let itemLogos=[{tangerineLogo}, {appleLogo}, {kiwiLogo} ]
   // itemLogos.map();


        return (
            <div class="Item">
                   <div class="Logo">
                        <ShoppingItemImg name={props.name}/>
                    </div>
                <h1 class="ItemName"> {props.name} </h1>
                <div class="ItemDescription">{props.description}</div>
                <h4 class="ItemPrice">€/kg: {props.price}</h4>
                <h3 class="ItemPrice">kg: {props.count}</h3>
                <div class="Buttons">
                <Button onClick={props.removeItem} className={classes.Button}><RemoveCircleOutlineIcon /></Button>
                <Button onClick={props.addItem} className={classes.Button} ><AddCircleOutlineIcon className={addButtonClass.AddIcon}/></Button>
                </div>
            </div>
        )
    }

export default shoppingItem
