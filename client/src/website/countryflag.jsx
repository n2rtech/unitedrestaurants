import React,{useState} from 'react';
import { Container, Row, Col, Navbar, NavbarBrand, NavbarToggler, Collapse, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText, List, ListInlineItem, Form, FormGroup, Input, InputGroup, select, option, Label, Button, NavItem, NavLink, Nav,TabContent,TabPane } from 'reactstrap'
import './css/style.css'


const Countryflag = (props) => {

  return (
      <div className="countryflag">
        <Container fluid={true} className="p-0">
        <Row className="m-0">
          <Col sm="12" className="p-0">
            <List type="inline">
              <ListInlineItem>
                <a href="#">
                  <img src={`${process.env.PUBLIC_URL}/assets/images/flag/USA.png`} 
               alt="Menu-Icon"/>
                      USA
                </a>
              </ListInlineItem>
              <ListInlineItem>
                <a href="#">
                  <img src={`${process.env.PUBLIC_URL}/assets/images/flag/CANADA.png`} 
               alt="Menu-Icon"/>
                      CAN
                </a>
              </ListInlineItem>
              <ListInlineItem>
                <a href="#">
                  <img src={`${process.env.PUBLIC_URL}/assets/images/flag/UNITED-KINGDOM.png`} 
               alt="Menu-Icon"/>
                      UK
                </a>
              </ListInlineItem>
              <ListInlineItem>
                <a href="#">
                  <img src={`${process.env.PUBLIC_URL}/assets/images/flag/ITALY.png`} 
               alt="Menu-Icon"/>
                      ITA
                </a>
              </ListInlineItem>
              <ListInlineItem>
                <a href="#">
                  <img src={`${process.env.PUBLIC_URL}/assets/images/flag/AUSTRALIA.png`} 
               alt="Menu-Icon"/>
                      AU
                </a>
              </ListInlineItem>
              <ListInlineItem>
                <a href="#">
                  <img src={`${process.env.PUBLIC_URL}/assets/images/flag/SPAIN.png`} 
               alt="Menu-Icon"/>
                      ESP
                </a>
              </ListInlineItem>
            </List>
          </Col>
          </Row>
        </Container>
      </div>
  );
}

export default Countryflag;