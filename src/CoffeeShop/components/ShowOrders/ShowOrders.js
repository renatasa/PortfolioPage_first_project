import React from 'react';
import ShowOneOrder from '../ShowOneOrder/ShowOneOrder';
import ShowPrice from '../ShowOneOrder/ShowPrice';
import classes from './ShowOrders.scss';
import axios from 'axios';
import {connect} from 'react-redux';

const showOrders =(props)=> {
    console.log('props from show orders ', props);
    console.log('items show orders ', props.allOrders);
    console.log('this is order 0 id', Object.keys(props.allOrders)[0] );
    let id= Object.keys(props.allOrders)[0] ;
    console.log('this is object 0 ', props.allOrders[id] );
    console.log('this is object 0 id2', props.allOrders["-M1C3Ipkxiom05Y8s2ug"])
   // let itemIds=Object.keys(props.items) ;
    let totalPrices=[];
    let orderedItemsNames=[];
    let orderedItemsCounts=[];
    let orders=[];
    let orderedItems=[];
   // let allOrders=[];
    orders=Object.values(Object.values(props.allOrders));
    totalPrices= orders.map(order=>order["totalPrice"]);
    orderedItems=orders.map(order=>order["items"]);
    orderedItemsNames=orderedItems.map(items=>items.map(item=>item["name"]));
    orderedItemsCounts=orderedItems.map(items=>items.map(item=>item["count"]));
    console.log('this is orderedItemsNames ', orderedItemsNames);
    console.log('this is orderedItemsCounts ', orderedItemsCounts);
    console.log('this is orderedItems ', orderedItems);
    console.log('this is first order first item name ',  orderedItemsNames[0][0]);
    let nameCount=[];
   // nameCount=orderedItemsNames.map((name, index)=>{name: orderedItemsCounts[index]})

//nameCount = `${orderedItems[0][0].name}`;

// let deleteOrder=(order)=>{
//     axios.delete('https://shoppingcart-9ee7a.firebaseio.com/orders.json/' , order)
//     .then((response)=> {
//         console.log(response);
//         console.log(order);
//      })
//     .catch( (error)=> {
//         console.log(error);
//  });

//}

    //loops through all orders
   for(let i=0; i<orderedItems.length; i++){
      let sum ; 

      //loops through individual order
    for(let k=0; k<orderedItems[i].length; k++){
      sum+= `${orderedItems[i][k].name} : ${orderedItems[i][k].count} kg `
      console.log ('this is sum ', sum) ;
        
    }
    // let id = Object.keys(props.items)[i];
    // let data =  props.items[id];
    nameCount.push(<div class="allOrders__individualOrder" key={Object.keys(props.allOrders)[i]}> 
                        <div class="allOrders__individualOrder-items"> {sum.slice(9, sum.length)} </div> 
                        <div class="allOrders__individualOrder-price"> Total price : {totalPrices[i]} € </div> 
                    </div>)
   }


   //////////////////////////////////////////////////////////////////////////////////////////////////////////////
//    for(let i=0; i<orderedItemsNames.length; i++){
//     for(let k=0; k<orderedItemsNames[i].length; k++){
//         let key=orderedItemsNames[i][k];
//         let value=orderedItemsCounts[i][k]
//         nameCount.push(`${key} : ${value}`) ;

//         // function (orderedItemsNames[i][k], orderedItemsCounts[i][k] ){
//         //     this.name=orderedItemsNames[i][k];

//         // }
//     }
//     let value2=totalPrices[i];
//     nameCount.push(`totalPrice: ${value2}`)
//    }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////



    // for (let i=0; i< Object.keys(props.items).length; i++){
    //     for(let k=0; k<Object.keys(orderedItemsNames).length; k++){
    //            // console.log (orderedItemsNames[i][k],':', orderedItemsCounts[i][k])
    //            allOrders.push(<ShowOneOrder
    //                             name={orderedItemsNames[i][k]}
    //                             count={orderedItemsCounts[i][k]}
    //                           />)
    //     }
    //     allOrders.push(<ShowPrice price={totalPrices[i]} key={i}/>)
    // }

    console.log('this is all orders ', nameCount);
    
        // orderedItemsNames.map((name1, index1)=>{
        //     name1.map((name2, idex2)=>{
        //         <ShowOneOrder
        //             name={name2}
                    
        //         />

        //     })
        // })


        // allOrders=orderedItemsNames.map((name1, index1)=>
        //     name1.map((name2, index2)=>
        //     <ShowOneOrder 
        //         name={name2} 
        //         count={orderedItemsCounts[index1][index2]}
        //         key={index2} 
        //         price={totalPrices[index1]} 
        //     />))

        // allOrders=totalPrices.map((price, index)=>
        //     <ShowPrice 
        //         price={price}
        //         orderedItemsNames={orderedItemsNames}
        //         orderedItemsCounts={orderedItemsCounts}
        //         key={index}
        //     />
        // )
     

    return (
        <div class="allOrders">
            
            {nameCount}
        </div>
    )


  //  Object.keys(Object.values(props.items)).map(key=>console.log('this iskey  ',key));

   //console.log('orders from show orders ', orders);
   //console.log('props length ', Object.keys(props.items).length);
    //console.log('props from show orders ', props);


}

// const mapStateToProps=state=>{
//     return { 
//         allOrders: state.fetchOrders.orders
//     }
// }

export default showOrders;