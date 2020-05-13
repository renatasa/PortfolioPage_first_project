import React from 'react';
import appleLogo from '../../assets/img/apple.jpg';
import kiwiLogo from '../../assets/img/kiwi.jpg';
import tangerineLogo from '../../assets/img/oranges.jpg';

const shoppingItemImg =(props)=> {
    switch(props.name){
        case 'Apple':
            return (
                <img src={appleLogo} alt={props.name}/>
                
            )
            
        case 'Kiwi':
                return (
                    <img src={kiwiLogo} alt={props.name}/>
                    
                )
        case 'Tangerine':
                    return (
                        <img src={tangerineLogo} alt={props.name}/>
                        
                    )
            default: 
            return 'nothing to return';
            
            }   
 
}

export default shoppingItemImg;
