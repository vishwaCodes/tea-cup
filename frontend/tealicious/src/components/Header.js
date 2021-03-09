import React from 'react';

import { CssBaseline } from '@material-ui/core';
import { Container } from 'reactstrap';

const Header = () => {
  return (
    <>
      <CssBaseline />
      <div className="index-page">
        <div className="masthead">
        </div>
        <div className="page-header header-filter">
          <div className="squares square1" />
          <div className="squares square2" />
          <div className="squares square3" />
          <div className="squares square4" />
          <div className="squares square5" />
          <div className="squares square6" />
          <div className="squares square7" />
          <Container>
            <div className="content-center brand">
              <h1 className="h1-seo">Teaberry</h1>
              <h3 className="d-none d-sm-block">
                Exquisite Teas from all over the world.
              <br />
              Crafted by Tea Lovers, for Tea Lovers.
              <br />
              Wishing you happy brews!
        </h3>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Header;
