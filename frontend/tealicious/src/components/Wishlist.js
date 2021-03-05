import React, { Component } from 'react';
import WishlistForm from './WishlistForm';

class Wishlist extends Component {

  constructor(props) {
    super(props);
    this.state = {
      display: 'none',
    };
  };

  toggleBodyForm = () => {
    this.state.display === 'block'
      ? this.setState({ display: 'none' })
      : this.setState({  display: 'block' });
  };

  deleteClickedWishlist = () => {
    this.props.deleteWishlist(this.props.wishlist);
    console.log('deleted clicked wishlist', this.props.wishlist)
  };

  render() {
    return (
      <li data-wishlists-index={this.props.wishlist.id}>
        <div>
          <span className="tea-item">{this.props.wishlist.name}</span>
          <span
            className='edit'
            onClick={this.toggleBodyForm}>
            Edit
          </span>
          <span
            className='remove'
            onClick={this.deleteClickedWishlist}>
            Remove
          </span>
        </div>
        { (this.state.display === 'none') ? ''
          :
          <WishlistForm 
          wishlist={this.props.wishlist}
          style={this.state.display}
          autoFocus={true}
          buttonName='Update Wishlist Item'
          updateWishlist={this.props.updateWishlist}
          toggleBodyForm={this.toggleBodyForm} />
      }
      </li>
    );
  };
};

export default Wishlist;