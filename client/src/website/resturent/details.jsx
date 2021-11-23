import React,{useState} from 'react';
import { Container, Row, Col, iframe, Navbar, NavbarBrand, NavbarToggler, Collapse, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText, Carousel, CarouselIndicators, CarouselItem, CarouselCaption, CarouselControl, Card, CardBody, CardTitle, CardSubtitle, CardText, List, ListInlineItem, Form, FormGroup, Input, InputGroup, select, option, Label, Button, NavItem, NavLink, Nav,TabContent,TabPane } from 'reactstrap'
import Header from '../header.jsx'
import Footer from '../footer.jsx'
import Detailpage from './detailpage.jsx';
import ScrollButton from '../ScrollButton.jsx';
import '../css/style.css'
const Details = (props) => {

  return (
      <div className="detailmain">
      	<Header />
      <Container className="p-0">

      	<Detailpage />
      	
      </Container>
      <Footer />
      </div>
  );
}

export default Details;
