import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { NavLink} from 'react-router-dom';

const shoppingCartButton =()=> {
        return (
    

        <div >

        {/* <Switch>
        <Route path="/shoppingCart/myOrders">
            <MyOrders />
          </Route>
        </Switch> */}

                <div>
                <NavLink to="/shoppingCart">
                <IconButton >
                    <ShoppingCartIcon/>
                </IconButton>
                </NavLink>


                </div>
        </div>

        )
}

export default shoppingCartButton ;