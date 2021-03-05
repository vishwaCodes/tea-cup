import React, { Component } from 'react';
import CreateWishlistForm from '../components/CreateWishlistForm';
import WishlistModel from '../models/Wishlist';
import Wishlists from '../components/Wishlists';

import '../App.css';

class WishlistContainer extends Component {

  constructor() {
    super();
    this.state = {
      wishlists: [],
    };
  };

  componentDidMount() {
    this.fetchData();
  };

  fetchData = () => {
    WishlistModel.all().then((res) => {
      this.setState({
        wishlists: res.data,
      });
    });
  };

  createWishlist = (wishlist) => {
    let newWishlist = {
      name: wishlist,
    };

    WishlistModel.create(newWishlist).then((res) => {
      console.log('res', res);
      let wishlists = this.state.wishlists;
      wishlists.push(res.data);
      this.setState({ wishlists: wishlists });
    });
  };

  deleteWishlist = (wishlistId) => {
    WishlistModel.delete(wishlistId).then((res) => {
      console.log(res);
      let wishlists = this.state.wishlists.filter((wishlist) => {
        console.log(wishlist.id)
        console.log(wishlist)
        return wishlist.id !== wishlistId.id;
      });
      this.setState({wishlists:wishlists});
    });
  };

  render() {
    return (
      <div className="wishlistContainer">
      <h2>Your Wishlist</h2>
      <CreateWishlistForm 
        createWishlist={this.createWishlist}
      />

      <Wishlists 
        wishlists={this.state.wishlists}
        deleteWishlist={this.deleteWishlist}
      />
      </div>
    );
  };
};

export default WishlistContainer;