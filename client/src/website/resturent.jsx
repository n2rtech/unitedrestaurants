import React,{useState} from 'react';
import { Container, Row, Col, Navbar, NavbarBrand, NavbarToggler, Collapse, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText, Carousel, CarouselIndicators, CarouselItem, CarouselCaption, CarouselControl, Card, CardBody, CardTitle, CardSubtitle, CardText, List, ListInlineItem, Form, FormGroup, Input, InputGroup, select, option, Label, Button, NavItem, NavLink, Nav,TabContent,TabPane } from 'reactstrap'
import Header from './header.jsx'
import Footer from './footer.jsx'
import Hotdeals from './hotdeals.jsx'
import Advertise from './advertise.jsx'
import Latestadditions from './latestadditions.jsx'
import Homeblog from './homeblog.jsx'
import ScrollButton from './ScrollButton.jsx';
import Resturentlist from './resturentlist.jsx';
import './css/style.css'
const Resturent = (props) => {

  return (
      <Container fluid={true} className="p-0">
      <Row className="m-0">
        <Col xs="12" className="p-0">     
           <Header />

           <Resturentlist />
           
           <Footer />
        </Col>
        </Row>
      </Container>
  );
}

export default Resturent;
