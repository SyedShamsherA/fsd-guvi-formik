import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Product from './components/product';
import Cart from './components/cart';
import productsData from './productData';
import './App.css'

const App = () => {
  const products = productsData.products

  return (
    <Provider store={store}>
      <h1>React Redux Cart</h1>
      <div className='main-container'>
        <div className='container-product'>
          <h2>Cart</h2>
          {products.map(product => (
            <Product key={product.id} product={product} />
          ))}
        </div>
        <div className='container-cart'>
        <Cart />
        </div>
      </div>
    </Provider>
  );
};

export default App;
