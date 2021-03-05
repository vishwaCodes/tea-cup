import React, { Component } from 'react';

class Wishlist extends Component {

  deleteClickedWishlist = () => {
    this.props.deleteWishlist(this.props.wishlist);
    console.log('deleted clicked wishlist', this.props.wishlist)
  };

  render() {
    return (
      <li data-wishlists-index={this.props.wishlist.id}>
        <span className="tea-item">{this.props.wishlist.name}</span>
        <span
          className= 'remove'
          onClick={this.deleteClickedWishlist}>
          Remove
        </span>
      </li> 
    );
  };
};

export default Wishlist;