import React,{useState} from 'react';
import Carousel from "react-multi-carousel";
import { Container, Row, Col, Navbar, NavbarBrand, NavbarToggler, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText, CarouselIndicators, CarouselItem, CarouselCaption, CarouselControl, Card, CardBody, CardTitle, CardSubtitle, CardText, List, ListInlineItem, Form, FormGroup, Input, InputGroup, select, option, Label, Button, NavItem, NavLink, Nav,TabContent,TabPane } from 'reactstrap'
import ReactStars from "react-rating-stars-component";
import "react-multi-carousel/lib/styles.css";
import './css/style.css'



const Homeblog = (props) => {

const ratingChanged = (newRating) => {
  console.log(newRating);
};

  return (
      <div className="homeblog">
       <Container className="p-0"> 
      <h1>for you to read</h1>
      <div className="seeall">
        <a href="#">SEE ALL</a>
      </div>
      <div style={{ position: "relative" }}>
        <Carousel responsive={responsive}>
          <Col sm="12">
            <div className="customcard">
              <Card
              >
                <CardBody>
                  <Row>
                    <Col sm="3">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/blogone.jpg`} 
                     alt="Menu-Icon"/>
                   </Col>
                   <Col sm="9">
                  <CardTitle tag="h5">
                    Lorem ipsum
                  </CardTitle>
                  <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                  >
                  7 Hours ago
                  </CardSubtitle>
                  <CardText>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est sit.....<a href="#" className="readmore">READ MORE</a>
                  </CardText>
                  
                  </Col>
                  </Row>
                </CardBody>
              </Card>
            </div>
          </Col>
          <Col sm="12">
            <div className="customcard">
              <Card
              >
                <CardBody>
                  <Row>
                    <Col sm="3">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/blogone.jpg`} 
                     alt="Menu-Icon"/>
                   </Col>
                   <Col sm="9">
                  <CardTitle tag="h5">
                    Lorem ipsum
                  </CardTitle>
                  <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                  >
                  7 Hours ago
                  </CardSubtitle>
                  <CardText>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est sit.....<a href="#" className="readmore">READ MORE</a>
                  </CardText>
                  
                  </Col>
                  </Row>
                </CardBody>
              </Card>
            </div>
          </Col>
          <Col sm="12">
            <div className="customcard">
              <Card
              >
                <CardBody>
                  <Row>
                    <Col sm="3">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/blogone.jpg`} 
                     alt="Menu-Icon"/>
                   </Col>
                   <Col sm="9">
                  <CardTitle tag="h5">
                    Lorem ipsum
                  </CardTitle>
                  <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                  >
                  7 Hours ago
                  </CardSubtitle>
                  <CardText>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est sit.....<a href="#" className="readmore">READ MORE</a>
                  </CardText>
                  
                  </Col>
                  </Row>
                </CardBody>
              </Card>
            </div>
          </Col>
          <Col sm="12">
            <div className="customcard">
              <Card
              >
                <CardBody>
                  <Row>
                    <Col sm="3">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/blogone.jpg`} 
                     alt="Menu-Icon"/>
                   </Col>
                   <Col sm="9">
                  <CardTitle tag="h5">
                    Lorem ipsum
                  </CardTitle>
                  <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                  >
                  7 Hours ago
                  </CardSubtitle>
                  <CardText>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est sit.....<a href="#" className="readmore">READ MORE</a>
                  </CardText>
                  
                  </Col>
                  </Row>
                </CardBody>
              </Card>
            </div>
          </Col>
          <Col sm="12">
            <div className="customcard">
              <Card
              >
                <CardBody>
                  <Row>
                    <Col sm="3">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/blogone.jpg`} 
                     alt="Menu-Icon"/>
                   </Col>
                   <Col sm="9">
                  <CardTitle tag="h5">
                    Lorem ipsum
                  </CardTitle>
                  <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                  >
                  7 Hours ago
                  </CardSubtitle>
                  <CardText>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est sit.....<a href="#" className="readmore">READ MORE</a>
                  </CardText>
                  
                  </Col>
                  </Row>
                </CardBody>
              </Card>
            </div>
          </Col>
          <Col sm="12">
            <div className="customcard">
              <Card
              >
                <CardBody>
                  <Row>
                    <Col sm="3">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/blogone.jpg`} 
                     alt="Menu-Icon"/>
                   </Col>
                   <Col sm="9">
                  <CardTitle tag="h5">
                    Lorem ipsum
                  </CardTitle>
                  <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                  >
                  7 Hours ago
                  </CardSubtitle>
                  <CardText>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est sit.....<a href="#" className="readmore">READ MORE</a>
                  </CardText>
                  
                  </Col>
                  </Row>
                </CardBody>
              </Card>
            </div>
          </Col>
        </Carousel>
      </div>
    </Container>
    </div>
  )
}

export default Homeblog;
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2
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