import React, { Component } from 'react';
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

  render() {
    return (
      <div className="wishlistContainer">
      <h2>Your Wishlist</h2>
        <Wishlists 
          wishlists={this.state.wishlists}
        />
      </div>
    );
  };
};

export default WishlistContainer;