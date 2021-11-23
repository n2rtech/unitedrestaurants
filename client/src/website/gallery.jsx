import React,{useState} from 'react';
import Carousel from "react-multi-carousel";
import { Container, Row, Col, Navbar, NavbarBrand, NavbarToggler, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText, CarouselIndicators, CarouselItem, CarouselCaption, CarouselControl, Card, CardBody, CardTitle, CardSubtitle, CardText, List, ListInlineItem, Form, FormGroup, Input, InputGroup, select, option, Label, Button, NavItem, NavLink, Nav,TabContent,TabPane } from 'reactstrap'
import ReactStars from "react-rating-stars-component";
import "react-multi-carousel/lib/styles.css";
import './css/style.css'



const Gallery = (props) => {

  return (
      <div className="hotdeals">
       <Container className="p-0"> 
      <div style={{ position: "relative" }}>
        <Carousel responsive={responsive}>
          <Col sm="12">
            <div className="customcard">
              <Card
              >
                <CardBody className="p-0">
                  <img src={`${process.env.PUBLIC_URL}/assets/images/resturent/1.jpg`} 
                     alt="Menu-Icon" className="img-fluid" />
                  
                </CardBody>
              </Card>
            </div>
          </Col>
          <Col sm="12">
            <div className="customcard">
              <Card
              >
                <CardBody className="p-0">
                  <img src={`${process.env.PUBLIC_URL}/assets/images/resturent/2.jpg`} 
                     alt="Menu-Icon" className="img-fluid" />
                  
                </CardBody>
              </Card>
            </div>
          </Col>
          <Col sm="12">
            <div className="customcard">
              <Card
              >
                <CardBody className="p-0">
                  <img src={`${process.env.PUBLIC_URL}/assets/images/resturent/1.jpg`} 
                     alt="Menu-Icon" className="img-fluid" />
                  
                </CardBody>
              </Card>
            </div>
          </Col>
          <Col sm="12">
            <div className="customcard">
              <Card
              >
                <CardBody className="p-0">
                  <img src={`${process.env.PUBLIC_URL}/assets/images/resturent/2.jpg`} 
                     alt="Menu-Icon" className="img-fluid" />
                  
                </CardBody>
              </Card>
            </div>
          </Col>
          <Col sm="12">
            <div className="customcard">
              <Card
              >
                <CardBody className="p-0">
                  <img src={`${process.env.PUBLIC_URL}/assets/images/resturent/1.jpg`} 
                     alt="Menu-Icon" className="img-fluid" />
                  
                </CardBody>
              </Card>
            </div>
          </Col>
          <Col sm="12">
            <div className="customcard">
              <Card
              >
                <CardBody className="p-0">
                  <img src={`${process.env.PUBLIC_URL}/assets/images/resturent/2.jpg`} 
                     alt="Menu-Icon" className="img-fluid" />
                  
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

export default Gallery;
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