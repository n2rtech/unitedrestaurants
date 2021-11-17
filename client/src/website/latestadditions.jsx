import React,{useState} from 'react';
import Carousel from "react-multi-carousel";
import { Container, Row, Col, Navbar, NavbarBrand, NavbarToggler, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText, CarouselIndicators, CarouselItem, CarouselCaption, CarouselControl, Card, CardBody, CardTitle, CardSubtitle, CardText, List, ListInlineItem, Form, FormGroup, Input, InputGroup, select, option, Label, Button, NavItem, NavLink, Nav,TabContent,TabPane } from 'reactstrap'
import ReactStars from "react-rating-stars-component";
import "react-multi-carousel/lib/styles.css";
import './css/style.css'



const Latestadditions = (props) => {

const ratingChanged = (newRating) => {
  console.log(newRating);
};

  return (
      <div className="latestadditions">
       <Container className="p-0"> 
      <h3>latest additions</h3>
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
                    <Col sm="4">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/foodimg1.png`} 
                     alt="Menu-Icon"/>
                   </Col>
                   <Col sm="8">
                  <CardTitle tag="h5">
                    Restaurant Name
                  </CardTitle>
                  <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                  >
                    Joined Just 2 min ago
                  </CardSubtitle>
                  </Col>
                  </Row>
                  
                  <Button>
                    VIEW
                  </Button>
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
                    <Col sm="4">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/foodimg1.png`} 
                     alt="Menu-Icon"/>
                   </Col>
                   <Col sm="8">
                  <CardTitle tag="h5">
                    Restaurant Name
                  </CardTitle>
                  <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                  >
                    Joined Just 2 min ago
                  </CardSubtitle>
                  </Col>
                  </Row>
                  
                  <Button>
                    VIEW
                  </Button>
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
                    <Col sm="4">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/foodimg1.png`} 
                     alt="Menu-Icon"/>
                   </Col>
                   <Col sm="8">
                  <CardTitle tag="h5">
                    Restaurant Name
                  </CardTitle>
                  <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                  >
                    Joined Just 2 min ago
                  </CardSubtitle>
                  </Col>
                  </Row>
                  
                  <Button>
                    VIEW
                  </Button>
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
                    <Col sm="4">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/foodimg1.png`} 
                     alt="Menu-Icon"/>
                   </Col>
                   <Col sm="8">
                  <CardTitle tag="h5">
                    Restaurant Name
                  </CardTitle>
                  <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                  >
                    Joined Just 2 min ago
                  </CardSubtitle>
                  </Col>
                  </Row>
                  
                  <Button>
                    VIEW
                  </Button>
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
                    <Col sm="4">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/foodimg1.png`} 
                     alt="Menu-Icon"/>
                   </Col>
                   <Col sm="8">
                  <CardTitle tag="h5">
                    Restaurant Name
                  </CardTitle>
                  <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                  >
                    Joined Just 2 min ago
                  </CardSubtitle>
                  </Col>
                  </Row>
                  
                  <Button>
                    VIEW
                  </Button>
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
                    <Col sm="4">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/foodimg1.png`} 
                     alt="Menu-Icon"/>
                   </Col>
                   <Col sm="8">
                  <CardTitle tag="h5">
                    Restaurant Name
                  </CardTitle>
                  <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                  >
                    Joined Just 2 min ago
                  </CardSubtitle>
                  </Col>
                  </Row>
                  
                  <Button>
                    VIEW
                  </Button>
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

export default Latestadditions;
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
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