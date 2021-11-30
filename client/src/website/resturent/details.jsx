import React,{Fragment,useState,useEffect} from 'react';
import Lightbox from "react-image-lightbox";
import { Container, Row, Col, Media, iframe, Navbar, NavbarBrand, NavbarToggler, Collapse, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText, Carousel, CarouselIndicators, CarouselItem, CarouselCaption, CarouselControl, Card, CardBody, CardTitle, CardSubtitle, CardText, List, ListInlineItem, Form, FormGroup, Input, InputGroup, select, option, Label, Button, NavItem, NavLink, Nav,TabContent,TabPane } from 'reactstrap'
import Header from '../header.jsx'
import Footer from '../footer.jsx'
import Detailpage from './detailpage.jsx';
import ScrollButton from '../ScrollButton.jsx';
import axios from 'axios'
import {IMAGE_GALLERY} from "../../constant";
import '../css/style.css'
const Details = (props) => {

  return (
      <div className="detailmain">
      	<Header />
      <Container fluid={true} className="p-0">

      	<Detailpage />
      	
      </Container>
      <Footer />
      </div>
  );
}

export default Details;
