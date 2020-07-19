import React, { Component } from 'react';
import ShoppingItem from '../../components/ShoppingItem/ShoppingItem';
import ShoppingNavBar from '../../components/ShoppingNavBar/ShoppingNavBar';
import './CoffeeShop.scss';
import ShoppingSummary from '../../components/ShoppingSummary/ShoppingSummary';
import Modal from '../../components/Modal/Modal';
import Spinner from '../../components/Spinner/Spinner'
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import TodaySpecial from '../../components/TodaySpecial/TodaySpecial';
import Error from '../../components/Error/Error.js';
import Success from '../../components/Success/Success';


export class CoffeeShop extends Component {
    constructor(props) {
        super(props);
        this.exploreOurProductsRef = React.createRef();
        this.todaySpecialRef = React.createRef();
        this.coffeeHomeRef = React.createRef();
      }

    componentDidMount(){
     //   console.log('this is componentDidMount');
  //   setTimeout(()=>{console.log('set timeout from comp did mount ') }, 3000);
        this.props.onFetchItems();
     //   console.log(this.props.items);
     //   console.log('submit order error from coffe shop component did mount ', this.props.submitOrderError);
    }

    addItem=(index)=>{
       //  console.log('this is from add Item', index, this.props.items[index]);
        this.props.onAddItem(index);

    }

    removeItem=(index)=>{

    if(this.props.items[index].count>0){
            this.props.onRemoveItem(index);
    }
}

    submitOrder=()=>{
        if (this.props.totalPrice){
            this.props.onSubmitOrder(this.props.items, this.props.totalPrice)
        }
        this.props.onFetchItems();
    }
 
      scrollTocoffeeHomeRef = () => window.scrollTo(0, this.coffeeHomeRef.current.offsetTop) 
      scrollToexploreOurProductsRef = () => window.scrollTo(0, this.exploreOurProductsRef.current.offsetTop)   
      scrollTotodaySpecialRef = () => window.scrollTo(0, this.todaySpecialRef.current.offsetTop)   

    render() {

    //checking if online shop items (coffee, cacao butter, spices) are already loaded
        let shoppingItems=[]; 

        if (!this.props.loading && this.props.items.length>0){
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
        } else if (!this.props.loading && this.props.fetchItemsError){
            shoppingItems=<Error errorMessage={this.props.fetchItemsError}/>
        }

        //checking weather to display modal component and what component to display inside modal component
        let modalOrSpinner =[];
        if (this.props.loading  && this.props.submitOrderError ==false  && this.props.submitOrderSuccess==false){
            modalOrSpinner= <Spinner/>
            console.log('first option')
        }else if(!this.props.loading  && this.props.submitOrderError  && !this.props.submitOrderSuccess){
            modalOrSpinner=<Error errorMessage={this.props.submitOrderError}/>
            console.log('error option')
        } else if(!this.props.loading  && this.props.submitOrderError ==false  && this.props.submitOrderSuccess==false){
            modalOrSpinner=<ShoppingSummary
            items={this.props.items}
            totalPrice={this.props.totalPrice}
            submitOrder={this.submitOrder}
            exitModal={this.props.closeShoppingSummaryModalAction}
          />
          console.log('second option')
        } else if(!this.props.loading  && !this.props.submitOrderError && this.props.submitOrderSuccess){
          // this.props.closeShoppingSummaryModalAction()
           //{()=> this.showShoppingSummaryModal()}
           // console.log('third option')
          modalOrSpinner= <Success/>
          // setTimeout(()=>{this.props.closeShoppingSummaryModalAction }, 3000);
        }

      //  console.log('render loading error success ', this.props.loading , this.props.submitOrderError , this.props.submitOrderSuccess)

        let allCoffeeShop =null;

        //checking weather items (coffe, cacoa, spices )  are loaded
        if (this.props.loading || !this.props.items){
            allCoffeeShop=   <Spinner/>  ; 
       }else{
            allCoffeeShop=(
                <div>
                <ShoppingNavBar 
                        clicked={this.props.showShoppingSummaryModalAction} 
                        />
          
               <div ref={this.coffeeHomeRef}> <Header/> </div>
            
                <div class="shoppingItems" ref={this.exploreOurProductsRef}>
    
                    <h2 class="heading-2">Explore our products</h2>
                    <div class="shoppingItems__allItems">
                          {shoppingItems}
                </div>

                <h2 class="heading-2">Today's special offer</h2>
                    
                <div ref={this.todaySpecialRef}> <TodaySpecial/> </div> 
   
                    <Modal 
                        show={this.props.showShoppingSummaryModal} 
                        exitModal={this.props.closeShoppingSummaryModalAction}>
                        {modalOrSpinner}
                    </Modal>
    
                </div>

                <Footer 
                    scrollToCoffeeHome={this.scrollTocoffeeHomeRef}
                    scrollToExploreOurProducts={this.scrollToexploreOurProductsRef}
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
        totalPrice: state.fetchItems.totalPrice,
        fetchItemsError: state.fetchItems.fetchItemsError,
        submitOrderError: state.fetchItems.submitOrderError,
        submitOrderSuccess: state.fetchItems.submitOrderSuccess,
        showShoppingSummaryModal: state.fetchItems.showShoppingSummaryModal
      
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        onFetchItems: ()=>dispatch(actions.fetchItems()), 
        onAddItem: (index)=>dispatch(actions.addItem(index)), 
        onRemoveItem: (index)=>dispatch(actions.removeItem(index)),
        onSubmitOrder: (allItems, totalPrice)=>dispatch(actions.submitOrder(allItems, totalPrice)),
        showShoppingSummaryModalAction: ()=>dispatch(actions.showShoppingSummaryModalAction()), 
        closeShoppingSummaryModalAction: ()=>dispatch(actions.closeShoppingSummaryModalAction())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoffeeShop);
