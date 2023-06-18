import React from "react";
import { PRODUCT } from '../../product'
import { Product } from "./product";
import "./shop.css"

export const Shop = () => {
    return (
        <div className="shop">
            <div className="shopTitle">
                <h1>T-Shop</h1>
                <div className="products">
                    {
                        PRODUCT.map((item)=>(
                            <Product data={item}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
};
