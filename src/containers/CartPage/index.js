
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Layout from '../../components/Layout'
import Card from '../../components/UI/Card'
import CartItem from './CartItem'
import {addToCart} from '../../actions'
import './style.css'

const CartPage = (props) => {

    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    //const cartItems = cart.cartItems;
    const [cartItems, setCartItems] = useState(cart.cartItems);
    useEffect(() => {
        setCartItems(cart.cartItems);
      }, [cart.cartItems]);

      const onQuantityIncrement = (_id, qty)=>{
        //console.log(_id, qty);
        const {name, price, img} = cartItems[_id];
        dispatch(addToCart({_id, name, price, img}, 1))
      }
      const onQuantityDecrement = (_id, qty)=>{
        const {name, price, img} = cartItems[_id];
        dispatch(addToCart({_id, name, price, img}, -1))
      }

    return (
        <Layout>
            <div className="cartContainer" style={{alignItems: 'flex-start'}}>
                <Card
                    headerLeft={`My Cart`}
                    headerRight={<div>Deliver to</div>}
                >
                    {
                        Object.keys(cartItems).map((key, index) =>
                            <CartItem 
                                key={index}
                                cartItem = {cartItems[key]}
                                onQuantityInc={onQuantityIncrement}
                                onQuantityDec={onQuantityDecrement}
                            />
                        )
                    }

                </Card>
                <Card
                    headerLeft='Price'
                 style={{
                    width: '500px'
                }}>

                </Card>

            </div>
        </Layout>
    )
}

export default CartPage
