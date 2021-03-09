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
      <div className="page-header">
        <div className="content-center">
          <Row className="row-grid justify-content-between align-items-center text-left">
            <Col lg="6" md="6">
              <h1 className="text-white">
                Tea is our passion <br />
              </h1>
              <p className="text-white mb-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis at voluptatum accusantium unde quaerat quae, nemo fugit dignissimos facere facilis aperiam reprehenderit accusamus animi molestiae!
                Beatae eos quidem quod illo!
              </p>
              <div className="btn-wrapper mb-3">
                <p className="category text-success d-inline">
                  About us
                </p>
                <Button
                  className="btn-link"
                  color="success"
                  href="/about"
                  onClick={(e) => e.preventDefault()}
                  size="sm"
                >
                  <i className="tim-icons icon-minimal-right" />
                </Button>
              </div>
              <div className="btn-wrapper">
                <div className="button-container">
                  <Button
                    className="btn-icon btn-simple btn-round btn-neutral"
                    color="default"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fab fa-twitter" />
                  </Button>
                  <Button
                    className="btn-icon btn-simple btn-round btn-neutral"
                    color="default"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fab fa-dribbble" />
                  </Button>
                  <Button
                    className="btn-icon btn-simple btn-round btn-neutral"
                    color="default"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fab fa-facebook" />
                  </Button>
                </div>
              </div>
            </Col>
            <Col lg="4" md="5">
              <img
                alt="..."
                className="img-fluid"
                src={teaplantation}
              />
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default HomeSection;

