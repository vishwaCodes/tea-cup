import React, {useState} from 'react';
import { commerce } from '../lib/commerce';
import Cart from '../components/Cart/Cart';

const CartPage = () => {
  const [cart, setCart] = useState({});
  return (
    <div>
      <Cart cart={cart} />
    </div>
  );
};

export default CartPage;