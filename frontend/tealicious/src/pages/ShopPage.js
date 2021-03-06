import React, { useState, useEffect } from 'react';
import { commerce } from '../lib/commerce';
import { Products, ShopNavbar } from '../components';


const ShopPage = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products);

  return (
  <div>
    <ShopNavbar />
    <Products />
  </div>
  );
};

export default ShopPage;