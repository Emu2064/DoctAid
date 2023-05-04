import React from "react";
import "./index.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import thumbnail from "../../images/doct1-removebg-preview.png";
import Typewriter from "typewriter-effect";

const Innovative = () => {
  return (
    <div>
      <Container fluid="md" className="text-light mt-sm-4">
        <Row className="justify-content-md-center">
          <Col
            xs="12"
            md="6"
            className="d-flex flex-column justify-content-center"
          >
            <div className="ms-5">
              {/* <h1>Generalized Innovative care Services</h1> */}
              <h1>
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                    delay: 30,
                    strings: ["Generalized Innovative care Services"],
                  }}
                />
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                voluptatum a necessitatibus explicabo qui dolorem eum velit
                voluptates repellendus optio?
              </p>
              <Button variant="primary">Get appointment</Button>
            </div>
          </Col>
          <Col
            xs="12"
            md="6"
            className="d-flex justify-content-center align-items-center"
          >
            <Image src={thumbnail} fluid className="h-75 ms-3" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Innovative;
