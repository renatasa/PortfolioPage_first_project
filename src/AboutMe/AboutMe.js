import React from 'react';
import './AboutMe.scss';
import {NavLink} from 'react-router-dom';
import reduxSVG from './logos/reduxSVG.svg';
import reactSVG from './logos/reactSVG.svg';
import cssSVG from './logos/cssSVG.svg';
import javascriptSVG from './logos/javascriptSVG.svg';
import sassSVG from './logos/sassSVG.svg';
import gitSVG from './logos/gitSVG.svg';
import githubSVG from './logos/githubSVG.svg';

 const AboutMe =(props)=>  {

        return (
            <div class="aboutMe">
               
            <div >
                <h2>Frontend developer with main interest in React</h2>
                <h3>Thank you for visiting my website!</h3>
                {/* <div>
                    CSS SASS Javascript React Redux Git
                </div> */}
            </div>    

            <div class="aboutMe__github">
                    <img src={githubSVG} alt={'githubSVG'} class="aboutMe__logos-item   aboutMe__logos-item-git"/>
                    <div class="aboutMe__projects__buttons-item aboutMe__projects__buttons-item-git"> <a href="https://github.com/renatasa">My GitHub</a></div> 
            </div>

            <div class="aboutMe__projects">
                <h2 aboutMe__projects-header>Check out my projects</h2>
                <div class="aboutMe__projects__buttons">
                    <NavLink to="/coffeeShop/"> <div class="aboutMe__projects__buttons-item">Coffee Shop</div></NavLink>
                    <div class="aboutMe__projects__buttons-item">COVID statistics</div>
                </div>
            </div>   


            <div class="aboutMe__logos" >
                <img src={cssSVG} alt={'cssSVG'} class="aboutMe__logos-item   aboutMe__logos-css"/>
                <img src={javascriptSVG} alt={'javascriptSVG'} class="aboutMe__logos-item"/>
                <img src={sassSVG} alt={'sassSVG'} class="aboutMe__logos-item"/>
                <img src={reactSVG} alt={'reactSVG'} class="aboutMe__logos-item"/>
                <img src={reduxSVG} alt={'reduxSVG'} class="aboutMe__logos-item"/>
                <img src={gitSVG} alt={'gitSVG'} class="aboutMe__logos-item"/>
            </div>

            </div>


        )
    }


export default AboutMe
