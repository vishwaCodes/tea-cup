// import React, { useState, useEffect } from 'react';
// import { commerce } from '../lib/commerce';
// import { ShopNavbar } from '../components';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Cart from '../components/Cart/Cart';

// const CartPage = () => {
//   const [cart, setCart] = useState([{}]);

//   const fetchCart = async () => {
//     const cart = await commerce.cart.retrieve();

//     setCart(cart);
//     // console.log(fetchCart());
//   }

//   // const handleAddToCart = async (productId, quantity) => {
//   //   const item = await commerce.cart.add(productId, quantity);

//   //   setCart(item.cart);
//   // }

//   useEffect(() => {
//     fetchCart();
//   }, []);

//   const p = cart.line_items.length
//   console.log(p);

//   return (
//     <Router>
//       <ShopNavbar totalItems={cart.total_items} />
//       <Switch>
//         <Route exact path='/cart'>
//           <Cart cart={cart} />
//         </Route>
//       </Switch>
//     </Router>
//   );
// };

// export default CartPage;