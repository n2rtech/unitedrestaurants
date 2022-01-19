import React,{useState,useEffect} from 'react';
import { Container, Row, Col, Navbar, NavbarBrand, NavbarToggler, Collapse, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText, Carousel, CarouselIndicators, CarouselItem, CarouselCaption, CarouselControl, Card, CardBody, CardTitle, CardSubtitle, CardText, List, ListInlineItem, Form, FormGroup, Input, FormText, InputGroup, select, option, Label, Button, NavItem, NavLink, Nav,TabContent,TabPane } from 'reactstrap'
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
               <Row>
                 <Col sm="12">
                   <div className="contactform">
                     <Form>
                      <FormGroup>
                        <Label for="name">Name</Label>
                        <Input type="email" name="name" id="name" />
                      </FormGroup>
                      <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="email" name="email" id="email" />
                      </FormGroup>
                      <FormGroup>
                        <Label for="number">Phone Number</Label>
                        <Input type="number" name="email" id="number" />
                      </FormGroup>
                      <FormGroup>
                        <Label for="message">Message</Label>
                        <Input type="textarea" rows="5" cols="5" name="text" id="exampleText" />
                      </FormGroup>
                      <Button>Submit</Button>
                    </Form>
                   </div>
                 </Col>
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
