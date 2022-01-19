import React,{useState,useEffect} from 'react';
import { Container, Row, Col, Navbar, NavbarBrand, NavbarToggler, Collapse, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText, Carousel, CarouselIndicators, CarouselItem, CarouselCaption, CarouselControl, Card, CardBody, CardTitle, CardSubtitle, CardText, List, ListInlineItem, Form, FormGroup, Input, FormText, InputGroup, select, option, Label, Button, NavItem, NavLink, Nav,TabContent,TabPane } from 'reactstrap'
import Header from './header.jsx'
import Footer from './footer.jsx'
import contactus from './contactus.jsx'
import ScrollButton from './ScrollButton.jsx';
import axios from 'axios';
import './css/style.css'
const verifyEmail = (props) => {

  return (
      <Container fluid={true} className="p-0">
      <Row className="m-0">
        <Col xs="12" className="p-0">  
          <Header /> 
          <Container>
          <div className="verification">
            <h1>United Restaurants</h1>
            <p>Hello,</p>
            <p>Please verify your email from here</p>
            <button className="btn btn-primary">Verify Email Address</button>
          </div>
          </Container>
           <Footer />
        </Col>
        </Row>
      </Container>
      
  );
}

export default verifyEmail;
