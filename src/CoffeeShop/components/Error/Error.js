import React from 'react' ;
import './Error.scss';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import classes from './Error.module.css';

const error = (props) => {
   

return (

        <div className="Error">
            <ErrorOutlineIcon className={classes.errorIcon}/>
            {props.error} This is error
        </div>
            
            )
    };

export default error;
