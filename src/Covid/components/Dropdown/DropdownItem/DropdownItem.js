import React from 'react';
import './DropdownItem.scss';


const dropDownItem =(props)=> {
    
        return (
            <div class="item" onClick={props.clicked}>
                {props.countryName}
            </div>
        )
    
}

export default dropDownItem
