import React,{useState,useEffect} from 'react';
import { Container, Row, Col, Navbar, NavbarBrand, NavbarToggler, Collapse, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText, Carousel, CarouselIndicators, CarouselItem, CarouselCaption, CarouselControl, Card, CardBody, CardTitle, CardSubtitle, CardText, List, ListInlineItem, Form, FormGroup, Input, InputGroup, select, option, Label, Button, NavItem, NavLink, Nav,TabContent,TabPane } from 'reactstrap'
import Header from './header.jsx'
import Footer from './footer.jsx'
import contactus from './contactus.jsx'
import ScrollButton from './ScrollButton.jsx';
import axios from 'axios';
import './css/style.css'
const Contact = (props) => {

    const [contactUsData, setContactUsData] = useState('');

useEffect(() => {
    axios.get(`/api/pages/slug/contact-us`)
    .then((getData) => {
      setContactUsData(getData.data);
    });
  }, []);

  return (
      <Container fluid={true} className="p-0">
      <Row className="m-0">
        <Col xs="12" className="p-0">  
          <Header /> 
          <div className="informationpage">  
          <Container>
            <h1>Contact Us</h1>
            <div className="hr">
              <img src={`${process.env.PUBLIC_URL}/assets/images/hr.png`} 
                             alt="Menu-Icon"/>
               </div>
               <Row className="m-0">
               <Col><div dangerouslySetInnerHTML={{ __html: contactUsData.body }} /></Col>
               </Row>
          </Container>
          </div>
           <Footer />
        </Col>
        </Row>
      </Container>
      
  );
}

export default Contact;
