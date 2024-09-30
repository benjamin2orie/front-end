import { Container, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import React from "react";

const Hero = () => {
  return (
    <div className="py-5">
      <Container className="d-flex justify-content-center">
        <Card className="p-5 d-flex flex-column align-items-center hero-card bg-light w-75">
          <h1 className="text-center mb-4">
            Welcome to Aifpu school of science and school of business business
            site
          </h1>
          <p className="text-center mb-4 fs-3">
            this is an amazing site for aifpu igr
          </p>
          <div className="d-flex">
            <Link to="/login">
              <Button variant="primary" className="me-3 text-capitalize">
                login
              </Button>
            </Link>
            <Link to="register">
              <Button variant="secondary" className="text-capitalize">
                sign up
              </Button>
            </Link>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default Hero;
