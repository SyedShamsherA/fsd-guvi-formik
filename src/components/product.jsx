import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";
import './product.css'

const Product = ({ product }) => {
    const dispatch = useDispatch()

    const handleAddToCart = () => {
        dispatch(addItem(product))
    }

    return(
        <div className="product-container">
            <img src={product.thumbnail} alt={product.title} className="thumbnail-image" />
            <div className="sub-container">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <p>Price : ${product.price}</p>
                <button onClick={handleAddToCart}>Add to Cart</button>
            </div>
        </div>
    )
}

export default Product