import React from 'react';
import classes from './Input.module.css'; 
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
const input=(props)=>{
    console.log('this is input field');

    let placeholder = '';
    if (props.placeholder){
        placeholder=props.placeholder;
    }

    switch(props.type){
        case 'whatToDoInput':
            return (
                <TextareaAutosize
                className={classes.InputField}
                onChange={props.changed} 
                type='text' 
                name='todo' 
                placeholder={placeholder}
                value= {props.resetInput}
                disabled={false}
                />
                
            )
            
        case 'pendingTask':
            return (
                <TextareaAutosize
                   className={classes.InputField}
                   onChange={props.changed} 
                   type='text' 
                   name='todo' 
                   placeholder={placeholder}
                   value= {props.value}
                   disabled={false}
                />
                
               
            )
            
        case 'completedTask':
            return (
                <TextareaAutosize
                    className={classes.InputFieldDisabled}
                    //onChange={props.changed} 
                    type='text' 
                    name='todo' 
                    value= {props.value}
                    disabled={true}
                />   
                
            )
            default: 
            return 'nothing to return';
            
            }   
 
}

export default input;