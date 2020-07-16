import React from 'react';
import classes from './Footer.scss';
import {NavLink} from 'react-router-dom';


 const Footer =(props)=>  {
    console.log('ref from footer', props.firstref);
        return (
            <div class="Footer">
                
                <div class="Footer__info">
                    <div class="Footer__summary"> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
                    <div class="Footer__contact">
                        <ul >
                            <li>333-222-788</li>
                            <li>Coffee steet 17, Vilnius, Lithuania</li>
                            <li>email@email.com</li>
                        </ul>
                    </div>
                </div>            

                <div class="Footer__nav">
                    <ul >
                    <li class="Footer__nav__listItem" onClick={props.scrollToCoffeeHome}>Home</li> 
                    <NavLink to="/coffeeShop/MyOrders" style={{textDecoration: 'none'}}>    <li class="Footer__nav__listItem">Orders</li>  </NavLink>
                    <li class="Footer__nav__listItem" onClick={props.scrollToExploreOurProducts}>Purchase now</li> 
                    <li class="Footer__nav__listItem" onClick={props.scrollToTodaySpecial}>Today's special</li>  
                    </ul>
                
                </div>   

                <div class="Footer__copyright">&#9400;  Renata Šalkevič</div>   
            </div>
        )
    }


export default Footer
