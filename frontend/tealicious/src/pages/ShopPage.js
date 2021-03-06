import React, { useState, useEffect } from 'react';
import { commerce } from '../lib/commerce';
import { Products, ShopNavbar, Cart } from '../components';


const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([{}]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  }

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
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
      <div>
        <ShopNavbar totalItems={cart.total_items} />
        <Products products={products} onAddToCart={handleAddToCart} />
        {/* <Cart cart={cart} /> */}
      </div>
  );
};

export default ShopPage;