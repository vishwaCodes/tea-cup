import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';

const products = [
  { id: 1, name: 'Herbal Tea', description: 'Herbal Tea is good for you', price: '$10', image: 'https://i0.wp.com/cdn-prod.medicalnewstoday.com/content/images/articles/322/322624/herbal-tea-for-constipation.jpg?w=1155&h=1541'},
  { id: 2, name: 'Black Tea', description: 'Black Tea wakes you up', price: '$7', image: 'https://cdn-prod.medicalnewstoday.com/content/images/articles/319/319646/black-tea.jpg'},
]

const Products = () => {
  return (
    <main>
    <Grid container justify='center' spacing={4}>
      {products.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
          <Product product={product} />
        </Grid>
      ))}
    </Grid>
  </main>
  );
};

export default Products;