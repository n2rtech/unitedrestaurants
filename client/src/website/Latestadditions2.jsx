import React,{useState,useMemo} from 'react';
import Carousel from "react-multi-carousel";
import { Container, Row, Col, Card, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap'
import "react-multi-carousel/lib/styles.css";
import axios from 'axios';

const Latestadditions2 = (props) => {

  return (
      <div className="latestadditions">
        <Container className="p-0"> 
          <h3>latest additions</h3>
          <div className="seeall">
            <a href="/restaurants">SEE ALL</a>
          </div> 
          <div style={{ position: "relative" }}>
            <Carousel responsive={responsive}>
              <div className="customcard">
                <Card>
                  <CardBody>
                    <Row>
                      <Col sm="4" xs="4">
                        <img src={`${process.env.PUBLIC_URL}/assets/images/foodimg1.png`} 
                       alt="Menu-Icon"/>
                      </Col>
                      <Col sm="8" xs="8 p-0">
                        <CardTitle tag="h5">
                          <a href={`#`}>Burger King</a>
                        </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                          Joined 5 days ago
                        </CardSubtitle>
                      </Col>
                    </Row>
                    <Button>
                        <a href={`#`}>VIEW</a> 
                    </Button>
                  </CardBody>
                </Card>
              </div>
              <div className="customcard">
                <Card>
                  <CardBody>
                    <Row>
                      <Col sm="4" xs="4">
                        <img src={`${process.env.PUBLIC_URL}/assets/images/foodimg1.png`} 
                       alt="Menu-Icon"/>
                      </Col>
                      <Col sm="8" xs="8 p-0">
                        <CardTitle tag="h5">
                          <a href={`#`}>Burger King</a>
                        </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                          Joined 5 days ago
                        </CardSubtitle>
                      </Col>
                    </Row>
                    <Button>
                        <a href={`#`}>VIEW</a> 
                    </Button>
                  </CardBody>
                </Card>
              </div>
              <div className="customcard">
                <Card>
                  <CardBody>
                    <Row>
                      <Col sm="4" xs="4">
                        <img src={`${process.env.PUBLIC_URL}/assets/images/foodimg1.png`} 
                       alt="Menu-Icon"/>
                      </Col>
                      <Col sm="8" xs="8 p-0">
                        <CardTitle tag="h5">
                          <a href={`#`}>Burger King</a>
                        </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                          Joined 5 days ago
                        </CardSubtitle>
                      </Col>
                    </Row>
                    <Button>
                        <a href={`#`}>VIEW</a> 
                    </Button>
                  </CardBody>
                </Card>
              </div>
              <div className="customcard">
                <Card>
                  <CardBody>
                    <Row>
                      <Col sm="4" xs="4">
                        <img src={`${process.env.PUBLIC_URL}/assets/images/foodimg1.png`} 
                       alt="Menu-Icon"/>
                      </Col>
                      <Col sm="8" xs="8 p-0">
                        <CardTitle tag="h5">
                          <a href={`#`}>Burger King</a>
                        </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                          Joined 5 days ago
                        </CardSubtitle>
                      </Col>
                    </Row>
                    <Button>
                        <a href={`#`}>VIEW</a> 
                    </Button>
                  </CardBody>
                </Card>
              </div>
              <div className="customcard">
                <Card>
                  <CardBody>
                    <Row>
                      <Col sm="4" xs="4">
                        <img src={`${process.env.PUBLIC_URL}/assets/images/foodimg1.png`} 
                       alt="Menu-Icon"/>
                      </Col>
                      <Col sm="8" xs="8 p-0">
                        <CardTitle tag="h5">
                          <a href={`#`}>Burger King</a>
                        </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                          Joined 5 days ago
                        </CardSubtitle>
                      </Col>
                    </Row>
                    <Button>
                        <a href={`#`}>VIEW</a> 
                    </Button>
                  </CardBody>
                </Card>
              </div>
              <div className="customcard">
                <Card>
                  <CardBody>
                    <Row>
                      <Col sm="4" xs="4">
                        <img src={`${process.env.PUBLIC_URL}/assets/images/foodimg1.png`} 
                       alt="Menu-Icon"/>
                      </Col>
                      <Col sm="8" xs="8 p-0">
                        <CardTitle tag="h5">
                          <a href={`#`}>Burger King</a>
                        </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                          Joined 5 days ago
                        </CardSubtitle>
                      </Col>
                    </Row>
                    <Button>
                        <a href={`#`}>VIEW</a> 
                    </Button>
                  </CardBody>
                </Card>
              </div>
            </Carousel>
          </div>
        </Container>
      </div>
  )
}

export default Latestadditions2;
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };