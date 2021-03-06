import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';

import shopLogo from '../../assets/shopLogo.jpg';
import useStyles from './styles';

const ShopNavbar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <>
      <AppBar position='fixed' className={classes.appBar} color='inherit'>
        <Toolbar>
          <Typography component={Link} to='/' variant='h6' className={classes.title} color='inherit' >
            <img src={shopLogo} alt='Tealicious' height='25px' className={classes.image} />
            Tealicious
          </Typography>
          <div className={classes.grow} />
          {location.pathname === '/shop' && (
          <div className={classes.button}>
            <IconButton component={Link} to='/cart' aria-label='Show cart items' color='inherit'>
              <Badge badgeContent={totalItems} color='secondary'>
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div> )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default ShopNavbar;
