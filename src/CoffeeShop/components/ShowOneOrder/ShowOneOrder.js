import React from 'react';
import classes from './ShowOneOrder.module.css';


const showOneOrder=(props)=>{
        return (
            <div>
                <p className={classes.Item}> {props.name} : {props.count}</p>
            </div>
        )
    }

export default showOneOrder;
