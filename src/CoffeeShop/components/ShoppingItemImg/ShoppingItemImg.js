import React from 'react';
import appleLogo from '../../assets/img/apple.jpg';
import kiwiLogo from '../../assets/img/kiwi.jpg';
import tangerineLogo from '../../assets/img/oranges.jpg';
import salvadorDark from '../../assets/img/Salvador Dark.jpg';
import organicFrench from '../../assets/img/Organic French.jpg';
import arabicMocha from '../../assets/img/Arabic Mocha.jpg';
import brazilianCacoa from '../../assets/img/Brazilian Cacoa.jpg';
import brazilianCacoaButter from '../../assets/img/Brazilian Cacoa Butter.jpg';
import coffeeSpiceMix from '../../assets/img/Coffee Spice Mix.jpg';

const shoppingItemImg =(props)=> {
    switch(props.name){
        case 'Salvador Dark':
                        return (
                            <img src={salvadorDark} alt={props.name}/>
                            
                        )
                        
        case 'Organic French':
                            return (
                                <img src={organicFrench} alt={props.name}/>
                                
                            )
        case 'Arabic Mocha':
                    return (
                        <img src={arabicMocha} alt={props.name}/>
                                    
                        )
        case 'Brazilian Cacoa':
                    return (
                            <img src={brazilianCacoa} alt={props.name}/>
                             )
                                    
        case 'Brazilian Cacoa Butter':
                    return (
                            <img src={brazilianCacoaButter} alt={props.name}/>
                                )
        case 'Coffee Spice Mix':
                    return (
                            <img src={coffeeSpiceMix} alt={props.name}/>
                                )
            default: 
            return 'nothing to return';
            
            }   
 
}

export default shoppingItemImg;
