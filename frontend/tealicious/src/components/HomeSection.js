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
                <p id="aboutPara" className="category d-inline">
                  About us
                  <Button
                  className="btn-link"
                  color=""
                  href="/about"
                  size="lg"
                >
                  <i id="forwardIcon" class="fas fa-chevron-right"></i>
                </Button>
                </p>
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
            <Col lg="5" md="6">
              <img
                alt="..."
                className="img-fluid"
                src="https://images.unsplash.com/photo-1539398100550-fbe9dff24993?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1129&q=80"
              />
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default HomeSection;

