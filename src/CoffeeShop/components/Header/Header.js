import React from 'react';
import './Header.scss';
import coffeeHouseLogo from '../../assets/img/coffee-house-logo-png.png';

const header=()=>{
    
        return (
        

        <header className="header">
            <div className="header__logo">
                <img src={coffeeHouseLogo} alt="Logo" className="header__logo-box"/>
            </div>

            <div className="header__text">
            <h1 className="heading-primary">
                <span className="heading-primary--main">Coffee House</span>
                <span className="heading-primary--sub">discover sip of coffee</span>
            </h1>
           
            </div>

        </header>

            
        )
    
}

export default header
