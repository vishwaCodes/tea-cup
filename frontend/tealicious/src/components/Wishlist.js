import React, { Component } from 'react';

class Wishlist extends Component {
  render() {
    return (
      <li data-wishlists-index={this.props.wishlist.id}>
        <span className="tea-item">{this.props.wishlist.name}</span>
      </li> 
    );
  };
};

export default Wishlist;