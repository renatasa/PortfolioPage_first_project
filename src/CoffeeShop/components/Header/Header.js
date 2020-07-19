import React from 'react';
import './Header.scss';
import coffeeHouseLogo from '../../assets/img/coffee-house-logo-png.png';

const header=()=>{
    
        return (
        

        <header class="header">
            <div class="header__logo-box">
                <img src={coffeeHouseLogo} alt="Logo" class="header__logo"/>
            </div>

            <div class="header__text-box">
            <h1 class="heading-primary">
                <span class="heading-primary--main">Coffee House</span>
                <span class="heading-primary--sub">discover sip of coffee</span>
            </h1>
           
            </div>

        </header>

            
        )
    
}

export default header
