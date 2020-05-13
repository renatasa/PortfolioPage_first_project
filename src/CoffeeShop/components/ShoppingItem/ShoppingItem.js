import React from 'react';
import { Button } from '@material-ui/core';
import classes from './ShoppingItem.module.css';
import ShoppingItemImg from '../ShoppingItemImg/ShoppingItemImg';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';

const shoppingItem=(props)=>{
   // let itemLogos=[{tangerineLogo}, {appleLogo}, {kiwiLogo} ]
   // itemLogos.map();
        return (
            <div className={classes.Item}>
                <div className={classes.Logo}>
                    <ShoppingItemImg name={props.name}/>
                </div>
                <h1 className={classes.ItemName}> {props.name} </h1>
                <div className={classes.ItemDescription}>{props.description}</div>
                <h4 className={classes.ItemPrice}>€/kg: {props.price}</h4>
                <h3 className={classes.ItemPrice}>kg: {props.count}</h3>
                <div className={classes.Buttons}>
                <Button onClick={props.removeItem} className={classes.Button}><RemoveCircleOutlineIcon className={classes.RemoveIcon}/></Button>
                <Button onClick={props.addItem} className={classes.Button} ><AddCircleOutlineIcon className={classes.AddIcon}/></Button>
                </div>
            </div>
        )
    }

export default shoppingItem
