import React from "react";
import {useMyReducer} from "../context/ReducerProvider";

const CartList = () => {
    const {carts, removeCart} = useMyReducer();
    return (
        <div className={'cartList'}>
            {carts.map(cartItem => {
                const {title, price, id, quantity} = cartItem
                return (<div key={Math.random()} className={'cart'}>
                    <h6>{title}</h6>
                    <h6>Quantity : {quantity}</h6>
                    <button className={'delete-btn'} onClick={() => removeCart(id)}>Delete</button>
                </div>)
            })}
        </div>
    )
}
export default CartList