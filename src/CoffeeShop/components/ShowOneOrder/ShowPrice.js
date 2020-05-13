import React from 'react';
import ShowOneOrder from './ShowOneOrder';


const showPrice =(props)=> {
    // let totalOrder=props.orderedItemsNames.map((name1, index1)=>
    //         name1.map((name2, index2)=>

    //         <ShowOneOrder 
    //             name={name2} 
    //             count={props.orderedItemsCounts[index1][index2]}
    //             key={index2} 
                 
    //         />))

        return (
            <div>
                Total price: {props.price}
            </div>
        )
    }

export default showPrice;
