import React from 'react';
import salvadorDark from '../../assets/img/imgSmall/Salvador Dark1200.jpg';
import organicFrench from '../../assets/img/imgSmall/Organic French1200.jpg';
import arabicMocha from '../../assets/img/imgSmall/Arabic Mocha1200.jpg';
import brazilianCacoa from '../../assets/img/imgSmall/Brazilian Cacoa1200.jpg';
import brazilianCacoaButter from '../../assets/img/imgSmall/Brazilian Cacoa Butter600.jpg';
import coffeeSpiceMix from '../../assets/img/imgSmall/Coffee Spice Mix1200.jpg';
import sandwitch from '../../assets/img/sandwitch.jpg';
import cake from '../../assets/img/cheescake.jpg';
import coffee from '../../assets/img/capucino3.jpg';

import classes from './ShoppingItemImg.scss';

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
                            <img src={brazilianCacoa} alt={props.name} />
                             )
                                    
        case 'Brazilian Cacoa Butter':
                    return (
                            <img src={brazilianCacoaButter} alt={props.name} class="u-margin-top-small"/>
                                )
        case 'Coffee Spice Mix':
                    return (
                            <img src={coffeeSpiceMix} alt={props.name} class="u-margin-left-1"/>
                                )

        case 'Sandwitch':
                    return (
                             <img src={sandwitch} alt={props.name} class="u-margin-left-3" />
                                )

        case 'Cake':
                   return (
                              <img src={cake} alt={props.name} class="u-margin-left-4"/>
                                             )

        case 'Coffee':
                    return (
                               <img src={coffee} alt={props.name} class="u-margin-left-2" />
                                              )

            default: 
            return 'nothing to return';
            
            }   
 
}

export default shoppingItemImg;
