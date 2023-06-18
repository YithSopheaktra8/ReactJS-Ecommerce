import React, { useContext } from "react";
import { PRODUCT } from "../../product";
import { ShopContext } from "../../context/shop-context";
import {CartItem  } from './cart-items'
import './cart.css'

export const Cart = () => {
    const { cartItems } = useContext(ShopContext);

    return (
        <div className="cart">
            <div>
                <h1>Your Card Items</h1>
            </div>
            <div className="cartItems">
                {
                    PRODUCT.map((product) => {
                        if(cartItems[product.id] !==0){
                            return <CartItem data={ product }/>
                        }
                        return null;
                    })
                }
            </div>
        </div>
    )
};
