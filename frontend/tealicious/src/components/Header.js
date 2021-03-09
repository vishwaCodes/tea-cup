import React from 'react';

import { CssBaseline } from '@material-ui/core';
import { Container } from 'reactstrap';

const Header = () => {
  return (
    <>
      <CssBaseline />
      <header>
        <div className="index-page">
          {/* <div className="masthead">
          </div> */}

          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner" role="listbox">
              
        <div className="carousel-item active" style="background-image: url('http://placehold.it/1900x1080')">
                <div className="carousel-caption d-none d-md-block">
                  <h3>First Slide</h3>
                  <p>This is a description for the first slide.</p>
                </div>
              </div>
        <div className="carousel-item" style="background-image: url('http://placehold.it/1900x1080')">
                <div className="carousel-caption d-none d-md-block">
                  <h3>Second Slide</h3>
                  <p>This is a description for the second slide.</p>
                </div>
              </div>
        <div className="carousel-item" style="background-image: url('http://placehold.it/1900x1080')">
                <div className="carousel-caption d-none d-md-block">
                  <h3>Third Slide</h3>
                  <p>This is a description for the third slide.</p>
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
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
      </header>
    </>
  );
};

export default Header;
