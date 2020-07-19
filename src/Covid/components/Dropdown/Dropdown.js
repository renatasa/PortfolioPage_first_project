import React from 'react';
import './Dropdown.scss';
import DropdownItem from './DropdownItem/DropdownItem.js';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';


const dropdown =(props)=> {

    let showItem=[];
    
    if(props.items.length>0){
        console.log('props.items from dropdown', props.items)
        for (let i=0 ; i<props.items.length; i++){

                showItem.push( <DropdownItem 
                                    key={props.items[i]}
                                    countryName={props.items[i]}
                                    clicked={()=> props.onselectCountry(props.items[i])}
                                    /> )

        } 

    }

    //checks if any country name is selected and displays in dropdown
  let selectCountry=null;
  if(props.selectedCountry){
      selectCountry=props.selectedCountry
  } else{
      selectCountry='Select country'
  }


        return (
            <div class="dropdown" onClick={props.onshowDropdown} >
            <div class="dropdown-select">{selectCountry}</div>
            {props.showDropdown ? <div class="dropdown-content">{showItem}</div> : null}
            </div>
        )
    
}

const mapStateToProps=state=>{
    return{
        items: state.countriesReducer.items, 
        loading: state.allCountriesDataReducer.loading,
        selectedCountry: state.countriesReducer.selectedCountry,
        showDropdown: state.countriesReducer.showDropdown
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        onselectCountry: (country)=>dispatch(actions.selectCountry(country)), 
        onshowDropdown: ()=>dispatch(actions.showDropdown())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(dropdown)
