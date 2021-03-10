import React from 'react';

import AboutNavbar from '../components/Navbar/AboutNavbar';

const AboutPage = () => {
  return (
    <>
    <AboutNavbar />
      <div className="bg-primary mt-5">
        <div className="container py-5">
          <div className="row h-100 align-items-center py-5">
            <div className="col-lg-6">
              <h1 className="display-4 text-white">Our Purpose</h1>
              <p className="lead text-muted mb-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Nihil voluptatem fugit eos architecto temporibus consequuntur incidunt numquam esse perferendis
                id illo, hic adipisci exercitationem reiciendis, quidem consectetur minus maiores voluptatum.
              </p>
            </div>
            <div className="col-lg-6 d-none d-lg-block">
              <img src="https://images.unsplash.com/photo-1586193804147-64d5c02ef9c1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
              className="img-fluid"
              alt=""             
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-primary py-5">
        <div className="container py-5">
          <div className="row align-items-center mb-5">
            <div className="col-lg-6 order-2 order-lg-1">
              <h2 className="font-weight-light text-white">Pottery</h2>
              <p className="font-italic text-muted mb-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam distinctio quasi reiciendis dolores quam dolorum assumenda ipsam dolor tempore ducimus? Nam, provident. Similique accusantium ullam excepturi obcaecati nemo esse optio!
              </p>
            </div>
            <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2"> 
              <img 
              src="https://images.unsplash.com/photo-1574948740506-1e6278b50607?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
              className="img-fluid mb-4 mb-lg-0"
              alt=""
              />
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-5 px-5 mx-auto">
              <img 
              src="https://pronaturefood.com/wp-content/uploads/2019/12/PS-green-tea-gift-box-first-harvest-1_580.jpg" 
              className="img-fluid mb-4 mb-lg-0"
              alt=""
              />
            </div>
            <div className="col-lg-6">
              <h2 className="font-weight-light text-white">Gift Sets</h2>
              <p className="font-italic text-muted mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi illo corrupti numquam, ex amet dignissimos illum. Officia quos illo veniam a repudiandae error, molestias commodi possimus quibusdam harum voluptates numquam?
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
