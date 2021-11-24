import React,{useState} from 'react';
import { Container, Row, Col, Navbar, NavbarBrand, NavbarToggler, Collapse, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText, Carousel, CarouselIndicators, CarouselItem, CarouselCaption, CarouselControl, Card, CardBody, CardTitle, CardSubtitle, CardText, List, ListInlineItem, Form, FormGroup, Input, InputGroup, select, option, Label, Button, NavItem, NavLink, Nav,TabContent,TabPane } from 'reactstrap'
import Header from './header.jsx'
import Footer from './footer.jsx'
import Privacypolicy from './privacypolicy.jsx'
import ScrollButton from './ScrollButton.jsx';
import './css/style.css'
const Privacy = (props) => {

  return (
      <Container fluid={true} className="p-0">
      <Row className="m-0">
        <Col xs="12" className="p-0">  
          <Header /> 
          <div className="informationpage">  
          <Container>
            <h1>Privacy Policy</h1>
            <div className="hr">
              <img src={`${process.env.PUBLIC_URL}/assets/images/hr.png`} 
                             alt="Menu-Icon"/>
               </div>
               <Row className="m-0">
                <Col sm="12" xs="12">
                  <p><b>Visitor privacy policy-</b> This site is free to use, you do not have to give us any information about yourself. But, if you choose to subscribe we assure you that your email address or any another information you provide will never be shared with any third party.</p>

                  <p><b>Merchant Privacy policy-</b> We may collect and retain the following information from and about you if you interact with us through the Site: your email address and Site password ;your payment details, a credit / debit card number and a credit / debit card expiration date and/ or other payment instrument details and owner's information; your phone and fax numbers ;your business name, address, website and membership history and any other information you submit to us; We will not reveal to anybody any of your information except for publicly known info, like business name, address, telephone number and fax number and your website url, email address will not be shown unless you yourself include it on your page. We are committed to keeping all your sensitive info safe and never share with any outside entity.</p>

                  
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

export default Privacy;
