import React, { Component } from 'react';

class AboutNavbar extends Component {
  render() {
    return ( 
      <nav id='homeNav' className="navbar  navbar-expand-lg fixed-top navbar-dark bg-primary">
        <a className="navbar-brand" href="/">Teaberry</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="/learn">Tea 101</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/shop">Shop</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/wishlist">Wishlist</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  };
};

export default AboutNavbar;
