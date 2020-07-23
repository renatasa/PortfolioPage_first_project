import React from 'react';
import  './Modal.scss';
import Backdrop from '../Backdrop/Backdrop';



const modal =(props)=>(
    
    <div>
    <Backdrop show={props.show} exitModal={props.exitModal}/>
    <div
         class="Modal"
         style={{ 
             transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
             opacity: props.show ? '1':'0'
             }}>
        {props.children}
    </div>
    </div>

)

export default modal;