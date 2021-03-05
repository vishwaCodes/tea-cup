import React from 'react';
import Wishlist from './Wishlist';

const Wishlists = (props) => {
  let wishlists = props.wishlists.map((wishlist) => {
    return (
      <Wishlist
        key={wishlist.id}
        wishlist={wishlist} 
        deleteWishlist={props.deleteWishlist}
      />
    );
  });

  return (
    <ul>
      {wishlists}
    </ul>
  );
};

export default Wishlists;