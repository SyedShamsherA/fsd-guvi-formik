import React from "react";
import { useDispatch } from "react-redux";
import { removeItem, increaseQuantity, decreaseQuantity } from "../redux/cartSlice";
import './cartitem.css'

const CartItem = ({ item }) => {
    const dispatch = useDispatch();

    const handleRemove = () => {
        dispatch(removeItem({ id: item.id }))
    }

    const handleIncrease = () => {
        dispatch(increaseQuantity({ id: item.id }))
    }

    const handleDecrease = () => {
        dispatch(decreaseQuantity({ id: item.id }))
    }

    return (
        <div className="container">
            <img src={item.thumbnail} alt={item.title} className="product-image" />
            <div className="sub-container">
                <h4>{item.title}</h4>
                <p>Price : ${item.price}</p>
                <div className="container-div">
                    <button onClick={handleIncrease} className="button-increment">+</button>
                    <p className="paragh-quantity"> {item.quantity}</p>
                    <button onClick={handleDecrease} className="button-decrement">-</button></div>
                <button onClick={handleRemove} className="button-remove">Remove</button>
            </div>
        </div>
    )
}

export default CartItem