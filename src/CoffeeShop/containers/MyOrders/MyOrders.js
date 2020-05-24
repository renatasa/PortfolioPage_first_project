import React, { Component } from 'react';
import axios from 'axios';
import Spinner from '../../components/Spinner/Spinner';
import ShowOrders from '../../components/ShowOrders/ShowOrders';
import ShoppingCartButton from './ShoppingCartButton';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/fetchOrders';

export class MyOrders extends Component {
    // state={
    //     items:null
    // };
    
    componentDidMount(){
        // axios.get('https://shoppingcart-9ee7a.firebaseio.com/orders.json')
        //     .then((response)=> {
        //      this.setState({items: response.data});
        //      console.log('this is state2 ', this.state);
        //      })
        //     .catch( (error)=> {
        //      console.log(error);
        //  });
        console.log('my orders componentdid mount')
        this.props.getOrders();
    }


    render() {
        let totalOrders=[];
        console.log('this is this.props.allOrders from MyOrders.js ', this.props.allOrders)
        if (this.props.allOrders===null || this.props.allOrders===undefined){
            totalOrders=<Spinner/>
        } else if (this.props.allOrders !== null ) {
            totalOrders=<ShowOrders allOrders={this.props.allOrders} />;
        }
        console.log('state from render ', this.props.allOrders);
        
        return (
            <div>
                <ShoppingCartButton/>
                {totalOrders}
            </div>
        )
    }
}

const mapStateToProps=state=>{
    return{
        allOrders: state.fetchOrders.orders
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        getOrders: ()=>dispatch(actions.fetchOrders())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyOrders) ;
