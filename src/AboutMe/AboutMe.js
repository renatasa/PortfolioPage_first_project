import React from 'react';
import './AboutMe.scss';
import {NavLink} from 'react-router-dom';
import reduxSVG from './logos/reduxSVG.svg';
import reactSVG from './logos/reactSVG.svg';
import cssSVG from './logos/cssSVG.svg';
import javascriptSVG from './logos/javascriptSVG.svg';
import sassSVG from './logos/sassSVG.svg';
import gitSVG from './logos/gitSVG.svg';
;
 const AboutMe =(props)=>  {
        return (
            <div class="aboutMe">
               
            <div class="aboutMe__text">
                <h2><li>Frontend developer with main interest in React</li></h2>
                <h3><li>This is my portfolio website</li></h3>
                {/* <div>
                    CSS SASS Javascript React Redux Git
                </div> */}
            </div>    

            <div class="aboutMe__logos" >
                <img src={cssSVG} alt={'reduxSVG'} class="aboutMe__logos-item-css"/>
                <img src={javascriptSVG} alt={'reduxSVG'} class="aboutMe__logos-item"/>
                <img src={sassSVG} alt={'reduxSVG'} class="aboutMe__logos-item"/>
                <img src={reactSVG} alt={'reduxSVG'} class="aboutMe__logos-item"/>
                <img src={reduxSVG} alt={'reduxSVG'} class="aboutMe__logos-item"/>
                <img src={gitSVG} alt={'reduxSVG'} class="aboutMe__logos-item"/>
            </div>

            <div class="aboutMe__projects">
                <h2 aboutMe__projects-header>Check out my projects</h2>
                <div class="aboutMe__projects__buttons">
                    <NavLink to="/coffeeShop/"> <div class="aboutMe__projects__buttons-item">Coffee Shop</div></NavLink>
                    <div class="aboutMe__projects__buttons-item">COVID statistics</div>
                </div>
            </div>   
            </div>


        )
    }


export default AboutMe
