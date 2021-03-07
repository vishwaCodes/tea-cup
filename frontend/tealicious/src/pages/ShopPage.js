import React, { useState, useEffect } from 'react';
import { commerce } from '../lib/commerce';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Products, ShopNavbar, Cart, Checkout } from '../components';


const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
    console.log(setProducts);
  }

  const fetchCart = async () => {
    // const response = await commerce.cart.retrieve();

    // setCart(response.cart);

    setCart(await commerce.cart.retrieve());
  }

  const handleAddToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);

    setCart(cart);
  }

  const handleUpdateCartQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });

    setCart(cart);
  }

  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);

    setCart(cart);
  }

  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();

    setCart(cart);
  }

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);


  return (
    // <div>
    //   <ShopNavbar totalItems={cart.total_items} />
    // <Products products={products} onAddToCart={handleAddToCart} />
    //   {/* <Cart cart={cart} /> */}
    // </div>
    <Router>
      <div>
        <ShopNavbar totalItems={cart.total_items} />
        <Switch>
          <Route exact path='/shop'>
            <Products products={products} onAddToCart={handleAddToCart} />
          </Route>
          <Route exact path='/cart'>
            <Cart
              cart={cart}
              handleUpdateCartQty={handleUpdateCartQty}
              handleRemoveFromCart={handleRemoveFromCart}
              handleEmptyCart={handleEmptyCart}
            />
          </Route>
          <Route exact path='/checkout'>
            <Checkout />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default ShopPage;