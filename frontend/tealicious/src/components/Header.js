import React from 'react';

import { CssBaseline } from '@material-ui/core';
import { Container } from 'reactstrap';

const Header = () => {
  return (
    <>
      <CssBaseline />
      <header>
        <div className="index-page bg-primary">
          {/* <div className="masthead">
          </div> */}

          <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <ol className="carousel-indicators">
              <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
              <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
              <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
            </ol>
            <div className="carousel-inner" role="listbox">

              <div className="carousel-item active">
                <img src="https://images.unsplash.com/photo-1531970227416-f0cddeb1f748?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1900&h=820" alt="" />
                <div className="carousel-caption d-none d-md-block">
                </div>
              </div>
              <div className="carousel-item">
                <img src="https://images.unsplash.com/photo-1523905330026-b8bd1f5f320e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&h=820" alt="" />
                <div className="carousel-caption d-none d-md-block">
                </div>
              </div>
              <div className="carousel-item">
                <img src="https://images.unsplash.com/photo-1492778297155-7be4c83960c7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&h=820" alt="" />
                <div className="carousel-caption d-none d-md-block">
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>


          <div className="page-header header-filter bg-primary">
            <div className="squares square1" />
            <div className="squares square2" />
            <div className="squares square3" />
            <div className="squares square4" />
            <div className="squares square6" />
            <div className="squares square7" />
            <Container>
              <div className="content-center brand">
                <h3 className="font-weight-light text-white">Exquisite Teas from around the World.</h3>
                <p id="para1" className="display-5 font-italic text-muted">Crafted by Tea Lovers, for Tea Lovers.</p>
                <p id="para2" className="display-5 font-italic text-muted">Wishing you Happy Brews!</p>
              </div>
            </Container>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
