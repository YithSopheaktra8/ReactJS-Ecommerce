import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {
    const { addToCart, cartItems } = useContext(ShopContext);

    const { id, productName, price, image } = props.data;

    const cartItemAmount = cartItems[id];
    return (
        <div className="product">
            <img src={image} alt="#" />
            <div className="description">
                <p>
                    <b>{productName}</b>
                </p>
                <p>${price}</p>
            </div>
            <button className="addToCartBttn" onClick={() => addToCart(id)}>
                Add to Cart {cartItemAmount > 0 && <> ({cartItemAmount}) </>}
            </button>
        </div>
    );
};
