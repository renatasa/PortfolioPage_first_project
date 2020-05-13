import React, { Component } from 'react';
import axios from 'axios';
import Spinner from '../../components/Spinner/Spinner';
import ShowOrders from '../../components/ShowOrders/ShowOrders';
import ShoppingCartButton from './ShoppingCartButton';

export class MyOrders extends Component {
    state={
        items:null
    };
    
    componentDidMount(){
        axios.get('https://shoppingcart-9ee7a.firebaseio.com/orders.json')
            .then((response)=> {
             this.setState({items: response.data});
             console.log('this is state2 ', this.state);
             })
            .catch( (error)=> {
             console.log(error);
         });

    }


    render() {
        let allOrders=[];
        if (this.state.items===null){
            allOrders=<Spinner/>
        } else if (this.state.items !== null ) {
            allOrders=<ShowOrders items={this.state.items} />;
        }
        console.log('state from render ', this.state);
        
        return (
            <div>
                <ShoppingCartButton/>
                {allOrders}
            </div>
        )
    }
}

export default MyOrders ;
