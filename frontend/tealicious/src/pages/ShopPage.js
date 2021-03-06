import React, { useState, useEffect } from 'react';
import { commerce } from '../lib/commerce';
import { Products, ShopNavbar, Cart } from '../components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from '../config/routes';


const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  }

  const fetchCart = async () => {
    const cart = await commerce.cart.retrieve();

    setCart(cart);
  }

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart);
  }

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  // console.log(cart);

  return (
    <Router>
      <div>
        <ShopNavbar totalItems={cart.total_items} />
        <Switch>
            <Products products={products} onAddToCart={handleAddToCart} />
          <Route eaxct path='/cart'>
            <Cart cart={cart} />
          </Route>
        </Switch>
        {routes}
      </div>
    </Router>
  );
};

export default ShopPage;