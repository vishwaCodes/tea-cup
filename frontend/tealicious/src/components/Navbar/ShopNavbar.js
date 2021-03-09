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
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="/">Teaberry</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="/teas">Teas</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">About</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/shop">Shop</a>
              <span className="sr-only">(current)</span>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/wishlist">Wishlist</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="/" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="/">Action</a>
                <a className="dropdown-item" href="/">Another action</a>
                <a className="dropdown-item" href="/">Something else here</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/">Separated link</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/login">Log In</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/signup">Sign Up</a>
            </li>
          </ul>
          {location.pathname === '/shop' && (
          <div className={classes.button}>
            <IconButton component={Link} to='/cart' aria-label='Show cart items' color='inherit'>
              <Badge badgeContent={totalItems} color='secondary'>
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div> )}
          {/* <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="text" placeholder="Search" />
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
          </form> */}
        </div>
      </nav>
    </>
  );
};

export default ShopNavbar;
