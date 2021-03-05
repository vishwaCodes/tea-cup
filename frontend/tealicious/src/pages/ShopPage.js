import React from 'react';

// import Products from '../components/Products/Products';
// import ShopNavbar from '../components/Navbar/ShopNavbar';

import { Products, ShopNavbar } from '../components';

const ShopPage = () => {
  return (
  <div>
    <ShopNavbar />
    <Products />
  </div>
  );
};

export default ShopPage;