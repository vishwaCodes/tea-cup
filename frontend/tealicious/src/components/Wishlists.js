import React from 'react';
import Wishlist from './Wishlist';

const Wishlists = (props) => {
  let wishlists = props.wishlists.map((wishlist) => {
    return (
      <Tea
        key={wishlist.id}
        wishlist={wishlist} />
    );
  });

  return (
    <ul>
      {wishlists}
    </ul>
  );
};

export default Wishlists;