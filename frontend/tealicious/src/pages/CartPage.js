import React, {useState, useEffect} from 'react';
import { commerce } from '../lib/commerce';
import { ShopNavbar } from '../components';
import Cart from '../components/Cart/Cart';

const CartPage = () => {
  const [cart, setCart] = useState({});

  const fetchCart = async () => {
    const cart = await commerce.cart.retrieve();

    setCart(cart);
    console.log(cart);
  }

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart);
  }

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <div>
      <div>
        <ShopNavbar totalItems={cart.total_items} />
        {/* <Products products={products} onAddToCart={handleAddToCart} /> */}
        {/* <Cart cart={cart} /> */}
      </div>
    </div>
  );
};

export default CartPage;