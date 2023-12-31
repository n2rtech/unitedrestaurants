import React,{useState} from 'react';
import { Container, Row, Col, Navbar, NavbarBrand, NavbarToggler, Collapse, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText, Carousel, CarouselIndicators, CarouselItem, CarouselCaption, CarouselControl, Card, CardBody, CardTitle, CardSubtitle, CardText, List, ListInlineItem, Form, FormGroup, Input, InputGroup, select, option, Label, Button, NavItem, NavLink, Nav,TabContent,TabPane } from 'reactstrap'
import Header from '../header.jsx'
import Footer from '../footer.jsx'
import Blogdetailpage from './blogdetailpage.jsx';
import ScrollButton from '../ScrollButton.jsx';
import '../css/style.css'
const Blogdetails = (props) => {

  return (
      <div className="detailmain">
      	<Header />
      <Container fluid={true} className="p-0">

      	<Blogdetailpage />
      	
      </Container>
      <Footer />
      </div>
  );
}

export default Blogdetails;
