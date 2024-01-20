import React from 'react';
import { useSelector } from 'react-redux';
import { selectCart, selectTotalQuantity, selectTotalAmount } from '../redux/cartSlice';
import CartItem from './cartitem';

const Cart = () => {
  const cart = useSelector(selectCart);
  const totalQuantity = useSelector(selectTotalQuantity);
  const totalAmount = useSelector(selectTotalAmount);

  return (
    <div>
      <h2>Shopping Cart</h2>
      <p>Total Quantity: {totalQuantity}</p>
      <p>Total Amount: ${totalAmount}</p>
      {cart.items.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Cart;
