import React from 'react';
import WishlistContainer from '../containers/WishlistContainer';
import AboutNavbar from '../components/Navbar/AboutNavbar';

const WishlistPage = () => {
  return (
    <>
      <div id="wishlistDiv" className="bg-primary">
          <AboutNavbar/>
          <WishlistContainer />
      </div>
    </>
  );
};

export default WishlistPage;