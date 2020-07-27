import React from 'react';
import classes from  './Loader.module.css';

const loader=()=>(
    <div className={classes.loaderSpinner}>
        <div className={classes.loaderCoffee}>Loading...</div>
    </div>

)

export default loader;