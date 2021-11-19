import React,{useState} from 'react';
import { Container, Row, Col, Navbar, NavbarBrand, NavbarToggler, Collapse, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText, Form, FormGroup, Input, InputGroup, select, option, Label, Button, NavItem, NavLink, Nav,TabContent,TabPane } from 'reactstrap'
import './css/style.css'


const Menu = (props) => {

  return (
      <div className="headermenu">
        <Container fluid={true} className="p-0">
        <Row className="m-0">
          <Col sm="12" className="p-0">
            <Navbar expand="md" className="p-0 mmenu">
              <NavbarToggler onClick={function noRefCheck(){}} />
              <Collapse navbar>
                <Nav
                  className="me-auto"
                  navbar
                >
                  <NavItem>
                    <NavLink href="/resturent">
                      <img src={`${process.env.PUBLIC_URL}/assets/images/menuicon/restaurant_Ic.png`} 
               alt="Menu-Icon"/>
                      Restaurants
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#">
                      <img src={`${process.env.PUBLIC_URL}/assets/images/menuicon/Food_ic.png`}
               alt="Menu-Icon"/>
                      Food Markets
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#">
                      <img src={`${process.env.PUBLIC_URL}/assets/images/menuicon/beer_ic.png`}
               alt="Menu-Icon"/>
                      Beer & Alcohol
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#">
                      <img src={`${process.env.PUBLIC_URL}/assets/images/menuicon/services_ic.png`}
               alt="Menu-Icon"/>
                      Services
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#">
                      <img src={`${process.env.PUBLIC_URL}/assets/images/menuicon/supplires_ic.png`}
               alt="Menu-Icon"/>
                      Suppliers
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#">
                      <img src={`${process.env.PUBLIC_URL}/assets/images/menuicon/buy&sell_ic.png`}
               alt="Menu-Icon"/>
                      Buy & Sell
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#">
                      <img src={`${process.env.PUBLIC_URL}/assets/images/menuicon/jobs_ic.png`}
               alt="Menu-Icon"/>
                      Jobs
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#">
                      <img src={`${process.env.PUBLIC_URL}/assets/images/menuicon/video.png`}
               alt="Menu-Icon"/>
                      Videos
                    </NavLink>
                  </NavItem>
                  <UncontrolledDropdown
                    inNavbar
                    nav
                  >
                    <DropdownToggle>
                      <img src={`${process.env.PUBLIC_URL}/assets/images/menuicon/others_ic.png`}
               alt="Menu-Icon"/>
                    
                      Others
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>
                        Option 1
                      </DropdownItem>
                      <DropdownItem>
                        Option 2
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>
                        Reset
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>
              </Collapse>
            </Navbar>
          </Col>
          </Row>
        </Container>
      </div>
  );
}

export default Menu;