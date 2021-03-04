import React, { Component } from 'react';

class CreateWishlistForm extends Component {
  state = {
    wishlist: '',
  };

  onInputChange = (event) => {
    this.setState({
      wishlist: event.target.value,
    });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    let wishlist = this.state.wishlist;
    this.props.createWishlist(wishlist);
    this.setState({
      wishlist: '',
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit} id='taskForm'>
          <input
            onChange={this.onInputChange}
            type='text' id='newItemDescription'
            placeholder='Which tea would you like to add?'
            value={this.state.wishlist}
            name='name'
          />
          <button type='submit' id='addTask' className='btn'>Add Tea</button>
        </form>
      </div>
    );
  };
};

export default CreateWishlistForm;