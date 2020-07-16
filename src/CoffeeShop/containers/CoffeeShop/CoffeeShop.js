import React, { Component } from 'react';
import ShoppingItem from '../../components/ShoppingItem/ShoppingItem';
import ShoppingNavBar from '../../components/ShoppingNavBar/ShoppingNavBar';
import classes from './CoffeeShop.scss';
import ShoppingSummary from '../../components/ShoppingSummary/ShoppingSummary';
import axios from 'axios';
import Modal from '../../components/Modal/Modal';
import Spinner from '../../components/Spinner/Spinner'
import axiosErrorHandling from '../../../hoc/AxiosErrorHandling/AxiosErrorHandling';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import TodaySpecial from '../../components/TodaySpecial/TodaySpecial';
import Error from '../../components/Error/Error.js';


export class CoffeeShop extends Component {
    constructor(props) {
        super(props);
        this.exploreOurProductsRef = React.createRef();
        this.todaySpecialRef = React.createRef();
        this.coffeeHomeRef = React.createRef();
      }

    state={
        showShoppingSummary: false
    }

    componentDidMount(){
        console.log('this is componentDidMount');
        this.props.onFetchItems();
        console.log(this.props.items);
    }

    addItem=(index)=>{
         console.log('this is from add Item', index, this.props.items[index]);
        this.props.onAddItem(index);

    }

    removeItem=(index)=>{

    if(this.props.items[index].count>0){
            this.props.onRemoveItem(index);
    }
}


    showShoppingSummaryModal=()=>{
        this.setState({showShoppingSummary: !this.state.showShoppingSummary})
    }

    submitOrder=()=>{
        if (this.props.totalPrice){

        this.props.onSubmitOrder(this.props.items, this.props.totalPrice)
        setTimeout(()=>this.showShoppingSummaryModal(), 250);
        }

        this.props.onFetchItems();
    }
 
      scrollTocoffeeHomeRef = () => window.scrollTo(0, this.coffeeHomeRef.current.offsetTop) 
      scrollToexploreOurProductsRef = () => window.scrollTo(0, this.exploreOurProductsRef.current.offsetTop)   
      scrollTotodaySpecialRef = () => window.scrollTo(0, this.todaySpecialRef.current.offsetTop)   

    render() {
      console.log('this is shopping items ',this.props.items)
      console.log('this is props from coffeeshop ', this.props)
      console.log('input ref ', this.inputref);
  
        let shoppingItems=[]; 

        if (!this.props.loading && this.props.items){
            console.log('this is props items', typeof this.props.items);
            shoppingItems=this.props.items.map((item, index)=>{
                return(
                
                <ShoppingItem
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


        let allCoffeeShop =null;

        if (this.props.loading || !this.props.items){
            allCoffeeShop=   <Spinner/>  ; 
       }else{
            allCoffeeShop=(
                <div>
                <ShoppingNavBar 
                        clicked={this.showShoppingSummaryModal} 
                        />
                <Error/>
               <div ref={this.coffeeHomeRef}> <Header/> </div>
            
                <div class="shoppingItems" ref={this.exploreOurProductsRef}>
    
                    <h2 class="heading-2">Explore our products</h2>
                    <div class="shoppingItems__allItems">
                          {shoppingItems}
                </div>

                <h2 class="heading-2">Today's special offer</h2>
                    
                <div ref={this.todaySpecialRef}> <TodaySpecial/> </div> 
   
                    <Modal 
                        show={this.state.showShoppingSummary} 
                        exitModal={this.showShoppingSummaryModal}>
                        {modalOrSpinner}
                    </Modal>
    
                </div>
<button>click</button>
                <Footer 
                    scrollToCoffeeHome={this.scrollTocoffeeHomeRef}
                    scrollToExploreOurProducts={this. scrollToexploreOurProductsRef}
                    scrollToTodaySpecial={this.scrollTotodaySpecialRef}/>
                
            </div>

            )
       }


       
        return allCoffeeShop ;
    }
}

const mapStateToProps=state=>{
    return{
        items: state.fetchItems.items, 
        loading: state.fetchItems.loading, 
        totalPrice: state.fetchItems.totalPrice
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        onFetchItems: ()=>dispatch(actions.fetchItems()), 
        onAddItem: (index)=>dispatch(actions.addItem(index)), 
        onRemoveItem: (index)=>dispatch(actions.removeItem(index)),
        onSubmitOrder: (allItems, totalPrice)=>dispatch(actions.submitOrder(allItems, totalPrice)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(axiosErrorHandling(CoffeeShop, axios));
