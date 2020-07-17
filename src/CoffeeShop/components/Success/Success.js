import React from 'react' ;
import './Success.scss';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import classes from './Success.module.css';

const success = () => {
   
return (
    <div class="Success">
        <CheckCircleOutlineIcon className={classes.successIcon}/>
        Thank you for your order!
    </div>
    ) 
    
};

export default success;