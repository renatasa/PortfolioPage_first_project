import React, { Component } from 'react';
import ShoppingItem from '../../components/ShoppingItem/ShoppingItem';
import ShoppingNavBar from '../../components/ShoppingNavBar/ShoppingNavBar';
import classes from './CoffeeShop.module.css';
import ShoppingSummary from '../../components/ShoppingSummary/ShoppingSummary';
import axios from 'axios';
import Modal from '../../components/Modal/Modal';
import Spinner from '../../components/Spinner/Spinner'
import axiosErrorHandling from '../../../hoc/AxiosErrorHandling/AxiosErrorHandling';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
import Button from '../../components/Button/Button';

export class CoffeeShop extends Component {
    state={
        items: [],

        // items:[{name:'Tangerine',
        // count:1,
        // price: 1, 
        // description:' Among micronutrients, vitamin C is in 32% of the Daily Value in a 100 gram reference serving.'}, 
        // {name:'Apple',
        // count:0,
        // price: 2, 
        // description:'A typical apple serving provides a moderate content of dietary fiber.'},
        // {name:'Kiwi',
        // count:2,
        // price: 3, 
        // description:'It is particularly rich in vitamin C (112% DV) and vitamin K (38% DV), and vitamin E (10% DV).' }],


        showShoppingSummary: false,
        loading: false,
        totalPrice: 0
    }

    componentDidMount(){
        console.log('this is componentDidMount');
        console.log(this.props.testVar);
        this.props.onTest();
        console.log(this.props.testVar);
        this.props.onFetchItems();
        console.log(this.props.items);
        let fetchedItems=null;
       // this.setState({loading: true});
        // axios.get('https://shoppingcart-9ee7a.firebaseio.com/initialItems.json')
        //     .then(response=>{
        //         fetchedItems= response.data.items;
        //         //let item = [...this.state.items];
        //         // let item=[];
        //         // for (let i=0; i<fetchedItems.length; i++){
        //         //     console.log('this is for loop fetchedItems i name ', fetchedItems[i].name);
        //         //      item[i] = fetchedItems[i];
        //         //      console.log(item[i].name);
        //         // }
        //         this.setState({items: response.data.items});
        //         this.setState({loading: false});
        //     })
    }

    addItem=(index)=>{
        // let newCount = this.state.items[index].count +1 ;
         console.log('this is from add Item', index, this.props.items[index]);
        // const updatedItems ={
        //     ...this.state.items
        // }
        // console.log('updated items ', updatedItems);
        // const updatedItemsElement ={
        //     ...updatedItems[index]
        // }
        // console.log('updated items element ', updatedItemsElement);
        // updatedItemsElement.count= newCount;
        // console.log('updated items element after update ', updatedItemsElement);
        // updatedItems[index] = updatedItemsElement;
        // console.log('updated items after update ', updatedItems);
        
        // this.setState(Object.assign(this.state.items, updatedItems));
    
        // console.log('updated item after setState', this.state.items[index]);

        this.props.onAddItem(index);

    }

    removeItem=(index)=>{
    //     if(this.state.items[index].count>0){
    //     let newCount = this.state.items[index].count -1 ;
    //     const updatedItems ={
    //         ...this.state.items
    //     }
    //     const updatedItemsElement ={
    //         ...updatedItems[index]
    //     }
    //     updatedItemsElement.count= newCount;
    //     updatedItems[index] = updatedItemsElement;
    //     this.setState(Object.assign(this.state.items, updatedItems));
    // }

    if(this.props.items[index].count>0){
            this.props.onRemoveItem(index);
    }
}

    // countTotalPrice=()=>{
    //     let finalPrice=0;
    //     this.state.items.map(item=>finalPrice= finalPrice + (item.count*item.price) )
    //     this.setState({totalPrice: finalPrice});
        
    // }

    showShoppingSummaryModal=()=>{
        this.setState({showShoppingSummary: !this.state.showShoppingSummary})
      //  this.countTotalPrice();
    }

    submitOrder=()=>{
        if (this.state.totalPrice){
            this.setState({loading:true});

        let orderedItems=[];
        orderedItems=this.state.items.filter(item=>item.count>0);
        console.log('this is orderedItems from submit order ', orderedItems);

        const order = {
            items: orderedItems,
            totalPrice: this.state.totalPrice
        }

        axios.post('/orders.json', order)
        .then(response=>{
            this.setState({loading:false})
        })
        .catch(error=>{
            this.setState({loading:false})
        })

        setTimeout(()=>this.showShoppingSummaryModal(), 250);

        }

        let fetchedItems=null;
        this.setState({loading: true});
        axios.get('https://shoppingcart-9ee7a.firebaseio.com/initialItems.json')
            .then(response=>{
                fetchedItems= response.data.items;
                for (let i=0; i<fetchedItems.length; i++){
                    console.log('this is for loop fetchedItems i name ', fetchedItems[i].name);
                    let item = [...this.state.items];
                   //let item=[];
                     item[i] = fetchedItems[i];
                     console.log(item[i].name);
                    this.setState({items: item});
                }
        
                this.setState({loading: false});
            })
    }

    render() {
      console.log( this.props.testVar);
      console.log('this is shopping items ',this.props.items)
        let shoppingItems=[]; 
        if (this.props.loading || !this.props.items){
             shoppingItems=<Spinner/>; 
        }else{
            console.log('this is props items', typeof this.props.items);
            console.log('this is is Array ? this.props.items  ', Array.isArray(this.props.items) );
            shoppingItems=this.props.items.map((item, index)=>{
                return(<ShoppingItem
                key={index}
                name={item.name}
                count={item.count}
                price={item.price}
                description={item.description}
                addItem={()=>this.addItem(index)}
                removeItem={()=>this.removeItem(index)}
                />)
            })
        }
        

        let modalOrSpinner =[];
        if (this.state.loading || !this.props.items){
            modalOrSpinner= <Spinner/>
        } else {
            modalOrSpinner=<ShoppingSummary
            items={this.props.items}
            totalPrice={this.props.totalPrice}
            submitOrder={this.submitOrder}
            exitModal={this.showShoppingSummaryModal}
          />
        }

        return (
            <div>
                <ShoppingNavBar clicked={this.showShoppingSummaryModal}/>
            <div className={classes.shoppingItems}>
             {shoppingItems}

             <button onClick={this.props.onAddCow}> Add cow </button>
             <button onClick={this.props.onAddAnimal}> Add Animal </button>

             <Modal 
                show={this.state.showShoppingSummary} 
                exitModal={this.showShoppingSummaryModal}>
                {modalOrSpinner}
            </Modal>
            </div>

            </div>
        )
    }
}

const mapStateToProps=state=>{
    return{
        testVar: state.test1,
        items: state.items, 
        loading: state.loading, 
        totalPrice: state.totalPrice
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        onTest: ()=>dispatch(actions.testAction('this is test 1')), 
        onFetchItems: ()=>dispatch(actions.fetchItems()), 
        onAddItem: (index)=>dispatch(actions.addItem(index)), 
        onRemoveItem: (index)=>dispatch(actions.removeItem(index)),
        onPostOrder: ()=>dispatch(),
        onAddAnimal: ()=>dispatch(actions.addAnimal(2)), 
        onAddCow: ()=>dispatch(actions.addCow())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(axiosErrorHandling(CoffeeShop, axios));
