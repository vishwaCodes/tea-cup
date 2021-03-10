import React from 'react';

import teaplantation from '../assets/tea-plantation.jpg';

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
      <div className="bg-primary py-5">
        <div className="container py-5">
          <div className="row mb-4">
            <div className="col-lg-5">
              <h2 className="display-4 font-weight-light text-white">The Journal</h2>
              <p id="para3" className="font-italic text-muted">Some Tea Art</p>
            </div>
          </div>
        </div>
      </div>


      <div id="journal" className="row text-center bg-primary">
        <div className="col-6">
          <div className="card bg-primary">
            <img className="card-img-top" src="https://cdn.dribbble.com/users/432958/screenshots/9840101/media/a389d21495c76e91c35a6bbb702053da.png?compress=1&resize=800x600" alt="Card image cap" />
            <div className="card-body">
              <h4 class="font-weight-light text-white">A cup of tea</h4>
              <p className="font-italic text-muted">By Joyce Lee</p>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="card bg-primary">
            <img className="card-img-top" src="https://cdn.dribbble.com/users/432958/screenshots/9840101/media/a389d21495c76e91c35a6bbb702053da.png?compress=1&resize=800x600" alt="Card image cap" />
            <div className="card-body">
              <h4 class="font-weight-light text-white">A cup of tea</h4>
              <p className="font-italic text-muted">By Joyce Lee</p>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default HomeSection;

