import React from 'react';
import  './ShowOrders.scss';

const showOrders =(props)=> {
    // console.log('props from show orders ', props);
    // console.log('items show orders ', props.allOrders);
    // console.log('this is order 0 id', Object.keys(props.allOrders)[0] );
  //  let id= Object.keys(props.allOrders)[0] ;
    // console.log('this is object 0 ', props.allOrders[id] );
    // console.log('this is object 0 id2', props.allOrders["-M1C3Ipkxiom05Y8s2ug"])
   // let itemIds=Object.keys(props.items) ;
    let totalPrices=[];
    let orders=[];
    let orderedItems=[];
   // let allOrders=[];
    orders=Object.values(Object.values(props.allOrders));
    totalPrices= orders.map(order=>order["totalPrice"]);
    orderedItems=orders.map(order=>order["items"]);
    // console.log('this is orderedItemsNames ', orderedItemsNames);
    // console.log('this is orderedItemsCounts ', orderedItemsCounts);
    // console.log('this is orderedItems ', orderedItems);
    // console.log('this is first order first item name ',  orderedItemsNames[0][0]);
    let nameCount=[];

    //loops through all orders
   for(let i=0; i<orderedItems.length; i++){
      let sum ; 

      //loops through individual order
    for(let k=0; k<orderedItems[i].length; k++){
      sum+= `${orderedItems[i][k].name} : ${orderedItems[i][k].count} kg `
      console.log ('this is sum ', sum) ;
        
    }

    nameCount.push(<div class="allOrders__individualOrder" key={Object.keys(props.allOrders)[i]}> 
                        <div class="allOrders__individualOrder-items"> {sum.slice(9, sum.length)} </div> 
                        <div class="allOrders__individualOrder-price"> Total price : {totalPrices[i]} € </div> 
                    </div>)
   }


 //   console.log('this is all orders ', nameCount);

    return (
        <div class="allOrders">
            
            {nameCount}
        </div>
    )


}

export default showOrders;