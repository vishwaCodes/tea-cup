import React, { useEffect } from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';

import useStyles from './styles';
import CartItem from './CartItem/CartItem';

import '../../App.css';

const Cart = ({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart }) => {

  console.log(cart);

  const classes = useStyles();

  const EmptyCart = () => {
    return (
      <div>
        <h2 id='addItemH2'>You have no items in your shopping cart,</h2>
        <Link id='addItemLink' to ='/shop'>Would you like to add some?</Link>
      </div>
    );
  };

  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id} >
            <CartItem item={item} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <h2 id='subtotalH2'>Subtotal: {cart.subtotal.formatted_with_symbol}</h2>
        <div>
          <Button id='emptyCartButton' onClick={handleEmptyCart}
            className={classes.emptyButton} size='large' type='button'
            variant='contained' color='secondary'>
            Empty Cart
          </Button>
          <Button id='checkoutButton' component={Link} to='/checkout'
            className={classes.checkoutButton} size='large' type='button'
            variant='contained' color='primary'>
            Checkout
          </Button>
        </div>
      </div>
    </>
  );



  // if(!cart.line_items) return 'Loading';

  // const p = cart.line_items.length;
  // console.log(p);

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant='h3' gutterBottom>Your Shopping Cart</Typography>
      { !cart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;