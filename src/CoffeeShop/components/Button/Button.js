import React from 'react';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

import classes from './Button.module.css';

const button = (props) => {
    let styleAdd={
        padding: '0.25rem',
        position: 'absolute',
        marginLeft: '0.5rem',
        marginTop: '0.5rem',
        borderRadius: '0.5rem',
    }
    let styleComplete={
        padding: '0.2rem',
        position: 'absolute',
        marginLeft: '0.5rem',
        marginTop: '0.1rem',
        borderRadius: '0.5rem',
    }
    let styleBin={
        padding: '0.1rem',
        position: 'absolute',
        marginLeft: '2.5rem',
        marginTop: '0.1rem',
        borderRadius: '0.5rem',
    }
    switch(props.type){
        case 'completed':
            return (
                <IconButton onClick={props.changed} style={styleComplete} >
                    <CheckCircleOutlineIcon 
                    className={classes.ButtonComplete} 
                    />
                </IconButton>
            )
            
        case 'bin':
            return (
                <IconButton onClick={props.changed} style={styleBin} >
                      <DeleteIcon className={classes.ButtonBin}/>
                 </IconButton>
            )
            
        case 'task':
            return (
                <IconButton onClick={props.changed} disabled={props.disabled} style={styleAdd}>
                     <AddCircleOutlineIcon className={classes.ButtonAdd}/>
                </IconButton>
            )
            
        default: 
                return <button onClick={props.changed}></button>

    }
    };

export default button;