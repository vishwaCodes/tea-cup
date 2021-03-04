import React, { Component } from 'react';
import WishlistModel from '../models/Wishlist';
import Wishlists from '../components/Wishlists';

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
      <div className="wishlistsComponent">
        <Wishlists 
          wishlists={this.state.wishlists}
        />
      </div>
    );
  };
};

export default WishlistContainer;