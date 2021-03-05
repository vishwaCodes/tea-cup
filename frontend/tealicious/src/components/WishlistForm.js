import React, { Component } from 'react';

class WishlistForm extends Component {
  constructor() {
    super();
    this.state = {
      wishlist: '',
    };
  };

  onChange = (event) => {
    this.setState({
      wishlist: event.target.value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    const wishlist = this.props.wishlist;
    wishlist.name = this.state.wishlist;
    this.props.updateWishlist(wishlist);
    this.setState({ wishlist: '' });
    this.props.toggleBodyForm();
  };

  render() {
    return (
      <div className='wishlistForm'>
        <form onSubmit={ this.onSubmit }>
          <input
            autoFocus={this.props.autoFocus}
            onChange={ this.onChange }
            placeholder='Update your item'
            type='text'
            value={this.state.wishlist} />
          <button type='submit'>Save</button>
        </form>
      </div>
    );
  };
};

export default WishlistForm;