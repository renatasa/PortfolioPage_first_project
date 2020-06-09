import React from 'react';
import classes from './Footer.scss';
import {Route, Switch, NavLink, Link} from 'react-router-dom';


 const Footer =()=>  {
    
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
                    <NavLink to="/" style={{textDecoration: 'none'}}>    <li class="Footer__nav__listItem">Home</li> </NavLink>
                    <NavLink to="/coffeeShop/MyOrders" style={{textDecoration: 'none'}}>    <li class="Footer__nav__listItem">Orders</li>  </NavLink>
                    <NavLink to="/coffeeShop" style={{textDecoration: 'none'}}>    <li class="Footer__nav__listItem">Purchase now</li>  </NavLink>
                    <NavLink to="/" style={{textDecoration: 'none'}}> <li class="Footer__nav__listItem">Todays special</li>  </NavLink>
                    </ul>
                
                </div>   

                <div class="Footer__copyright">&#9400;  Renata Salkevic</div>   
            </div>
        )
    }


export default Footer
