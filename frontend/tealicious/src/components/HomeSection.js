import React from 'react';

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  ListGroupItem,
  ListGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

const HomeSection = () => {
  React.useEffect(() => {
    document.body.classList.toggle("section");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("section");
    };
  }, []);

  return (
    <>

      <div className="text-center">
        <div className="bg-primary">
          <div className="container py-5 bg-primary">
            <h3 className="font-weight-light text-white">Thinking of Brewing Up?</h3>
            <p id="para1" className="display-5 font-italic text-muted">Our favorite this month is Jasmine Tea. Jasmine tea offers a light, floral treat that is perfect when sipped after dinner or in the evening. The delicate flavor of a green (Pouchong) or white tea base is nicely complemented by the addition of fine jasmine blossoms.</p>
            <div className="py-5 bg-image-full">
              <img src="https://images.unsplash.com/photo-1512393144765-a04c69cf4f86?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt=""/>
            </div>
            <Button href='/shop' id="shop" type="submit">Shop Now</Button>
          </div>
        </div>
      </div>




      <div className="bg-primary py-5">
        <div className="container py-5">
          <div className="row mb-4">
            <div className="col-lg-5">
              <h2 className="display-4 font-weight-light text-white">The Journal</h2>
              <p id="para3" className="font-italic text-muted">Some of our favorite Tea Artworks.</p>
            </div>
          </div>
        </div>
      </div>

      <div id="journal" className="row text-center bg-primary">
        <div className="col-xl-3 col-sm-6 mb-5">
          <div className="card bg-primary">
            <img className="card-img-top" src="https://cdn.dribbble.com/users/432958/screenshots/9840101/media/a389d21495c76e91c35a6bbb702053da.png?compress=1&resize=800x600" alt="Card image cap" />
            <div className="card-body">
              <h4 class="font-weight-light text-white">A cup of tea</h4>
              <p className="font-italic text-muted">By Joyce Lee</p>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-5">
          <div className="card bg-primary">
            <img className="card-img-top" src="https://cdn.dribbble.com/users/1674522/screenshots/7320865/media/d61bc1087b30c44824f642ba45f6043a.png?compress=1&resize=1000x750" alt="Card image cap" />
            <div className="card-body">
              <h4 class="font-weight-light text-white">Tea Time</h4>
              <p className="font-italic text-muted">By Kirbie Koonse</p>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-5">
          <div className="card bg-primary">
            <img className="card-img-top" src="https://cdn.dribbble.com/users/230193/screenshots/3504652/matcha_dribbble.jpg?compress=1&resize=800x600" alt="Card image cap" />
            <div className="card-body">
              <h4 class="font-weight-light text-white">Japanese Tea: Matcha</h4>
              <p className="font-italic text-muted">By Maya Stepien</p>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-5">
          <div className="card bg-primary">
            <img className="card-img-top" src="https://cdn.dribbble.com/users/383120/screenshots/6519849/drib_morningtea_4x.png?compress=1&resize=1000x750" alt="Card image cap" />
            <div className="card-body">
              <h4 class="font-weight-light text-white">Morning Tea</h4>
              <p className="font-italic text-muted">By Tristan Kromopawiro</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSection;

