import React from 'react';
import Grid from '@material-ui/core';

const products = [
  { id: 1, name: 'Herbal Tea', description: 'Herbal Tea is good for you' },
  { id: 2, name: 'Black Tea', description: 'Black Tea wakes you up' },
]

const Products = () => {
  <main>
    <Grid container justify='center' spacing={4}>
      {products.map((product) => {
        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
          <Product />
        </Grid>
      })}
    </Grid>
  </main>
}

export default Products;