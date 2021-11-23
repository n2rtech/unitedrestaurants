import React,{useState} from 'react';
import { Container, Row, Col, Navbar, NavbarBrand, NavbarToggler, Collapse, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText, Carousel, CarouselIndicators, CarouselItem, CarouselCaption, CarouselControl, Card, CardBody, CardTitle, CardSubtitle, CardText, List, ListInlineItem, Form, FormGroup, Input, InputGroup, select, option, Label, Button, NavItem, NavLink, Nav,TabContent,TabPane } from 'reactstrap'
import Header from './header.jsx'
import Footer from './footer.jsx'
import Sales from './sales.jsx'
import ScrollButton from './ScrollButton.jsx';
import './css/style.css'
const Sale = (props) => {

  return (
      <Container fluid={true} className="p-0">
      <Row className="m-0">
        <Col xs="12" className="p-0">  
          <Header /> 
          <div className="informationpage">  
          <Container>
            <h1>Sales</h1>
            <div className="hr">
              <img src={`${process.env.PUBLIC_URL}/assets/images/hr.png`} 
                             alt="Menu-Icon"/>
               </div>
               <Row className="m-0">
                <Col sm="12" xs="12">
                  <p>Lunch Bux is a site intended to bring restaurants and their customers back together again instead of using a third party platform. Statistics show that the rate that restaurants are going out of business is unprecedented thanks to rising payroll costs, rising ingredient costs, other overhead, and most of all: sharing the profit with delivery companies who get the majority of the pie, leaving restaurants with almost no profit.</p>

                  <p>-On Lunch Bux, restaurants will be able to present a complete picture of what they are about, what they are selling, and what they are offering in an effort to get their customers to order directly from them which has many advantages:</p>

                  <p>(a) Helping restaurants realize their profits so that they can continue. We all know that small businesses are the backbone of any economy.</p>

                  <p>(b) When restaurants realize their profits, they will keep their prices within affordable ranges instead of constantly raising to meet their obligations.</p>

                  <p>(c) When restaurants realize the profits, they will keep using high quality ingredients to compete with the competition since they will be able to afford it.</p>

                  <p>(d)Restaurants will offer their deals and coupons here since it makes sense to save the money that they would originally pay to delivery companies. Customers will always have a coupon or a deal available to save, and the restaurant will realize its full profit from the sale minus the discount it offered. Instead of delivery companies being the sole beneficiaries, the customer and the restaurant both benefit.</p>

                  <p>(e) Restaurants who choose to keep using delivery companies will have the option to advertise their business providing the link to their menus on the delivery company's site, so their customers are still able to order from there.</p>

                  <p>-Lunch Bux is not only a coupon site, but rather, a very effective tool to advertise your business.</p>

                  <p>-Lunch Bux will keep launching advertising campaigns until it is well known all over the world</p>

                  <p>-Lunch Bux it is more of a message than a for profit business.</p>
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

export default Sale;
