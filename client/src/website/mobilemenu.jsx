import React from 'react';
import { Col, Navbar, NavbarToggler, Collapse, FormGroup, Input, NavItem, NavLink, Nav,ListInlineItem,List } from 'reactstrap'

const Mobilemenu = (props) => {
const [isOpen, setIsOpen] = React.useState(false);
  return (
      <div className="headermenu">
        <div>
                <Navbar
                  color="faded"
                  light
                >
                  <NavbarToggler
                    className="me-2"
                    onClick={() => { setIsOpen(!isOpen) }}
                  />
                  <Collapse isOpen={isOpen} navbar>
                    <Nav navbar>
                      <NavItem>
                        <Col xs="12">
                          <div className="searchbar">
                           <FormGroup>
                                  <div className="InputGroup">
                          <Input className="form-control" placeholder="Search in the department..." type="search"/>
                          </div>
                        </FormGroup>
                         </div>
                        </Col>
                        <hr/>
                      </NavItem>
                      <NavItem>
                        <Col sm="12" className="p-0">
                        <div className="mbcountry">
                          <div className="filtercountry">Filter by Country</div>
                          <List type="inline">
                            <ListInlineItem>
                              <a href="#">
                                <img src={`${process.env.PUBLIC_URL}/assets/images/flag/USA.png`} 
                             alt="Menu-Icon"/>
                              </a>
                            </ListInlineItem>
                            <ListInlineItem>
                              <a href="#">
                                <img src={`${process.env.PUBLIC_URL}/assets/images/flag/CANADA.png`} 
                             alt="Menu-Icon"/>
                              </a>
                            </ListInlineItem>
                            <ListInlineItem>
                              <a href="#">
                                <img src={`${process.env.PUBLIC_URL}/assets/images/flag/UNITED-KINGDOM.png`} 
                             alt="Menu-Icon"/>
                              </a>
                            </ListInlineItem>
                            <ListInlineItem>
                              <a href="#">
                                <img src={`${process.env.PUBLIC_URL}/assets/images/flag/ITALY.png`} 
                             alt="Menu-Icon"/>
                              </a>
                            </ListInlineItem>
                            <ListInlineItem>
                              <a href="#">
                                <img src={`${process.env.PUBLIC_URL}/assets/images/flag/AUSTRALIA.png`} 
                             alt="Menu-Icon"/>
                              </a>
                            </ListInlineItem>
                            <ListInlineItem>
                              <a href="#">
                                <img src={`${process.env.PUBLIC_URL}/assets/images/flag/SPAIN.png`} 
                             alt="Menu-Icon"/>
                              </a>
                            </ListInlineItem>
                          </List>
                        </div>
                        </Col>
                        <hr/>
                      </NavItem>
                      <NavItem>
                        <NavLink href="/restaurants">
                          Restaurants
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="#">
                          Food Markets
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="#">
                          Beer & Alcohol
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="#">
                          Services
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="#">
                          Suppliers
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="#">
                          Buy & Sell
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="#">
                          Jobs
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="#">
                          Videos
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="#">
                          Others
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </Collapse>
                </Navbar>
              </div>
      </div>
  );
}

export default Mobilemenu;
