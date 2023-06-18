import React from "react";
import './cart.css'
export const CartItem = (props) => {


    const { id, productName, price, image } = props.data;


    return (
        <div className="cartItem">

            <img src={image} alt="" />
            <div className="description">
                <p><b>{productName }</b></p>
                <p>${price}</p>
            </div>
        </div>
    )
}