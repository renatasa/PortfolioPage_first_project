import React from 'react' ;
import './Error.scss';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import classes from './Error.module.css';

const error = (props) => {
 //  let errorComponent=null;

    // if (props.showError){
    //     errorComponent=(
    //             <div class="Error">
    //                   <ErrorOutlineIcon className={classes.errorIcon}/>
    //                 {props.errorMessage} This is error
    //             </div>
    //     )
    // }
   
return (
    <div class="Error">
        <ErrorOutlineIcon className={classes.errorIcon}/>
        {props.errorMessage} 
    </div>
    ) 
    
};

export default error;
