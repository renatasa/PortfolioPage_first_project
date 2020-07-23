import React, {useState}  from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index.js';


function Calendar (props){

    const [startDate, setSelectedDate] = useState(null);
    let min=new Date("2020/01/23");
    // console.log('set selected date ', setSelectedDate);
    // console.log('set selected date ', startDate);

    return (
      <DatePicker
        selected={startDate} 
        onChange={(date) => {props.onselectStartDate(JSON.stringify(date));   setSelectedDate(date) }} 
        dateFormat='yyyy-MM-dd'
        minDate={min}
        maxDate={new Date()}
        placeholderText="Click to select a start date"
        />
    );
    
}

const mapDispatchToProps=dispatch=>{
    return{
        onselectStartDate: (date)=>dispatch(actions.selectStartDate(date))
    }
}

export default connect(null, mapDispatchToProps)(Calendar)
