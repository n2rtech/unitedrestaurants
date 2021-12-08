import React,{useState,useEffect} from 'react';
import Dropdown from 'react-multilevel-dropdown';
import { Container, Row, Col, Navbar, NavbarBrand, NavbarToggler, Collapse, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText, Form, FormGroup, Input, InputGroup, select, option, Label, Button, NavItem, NavLink, Nav,TabContent,TabPane } from 'reactstrap'
import './css/style.css'
import {useParams} from 'react-router-dom'
import axios from 'axios'

const Menu = (props) => {
const [isOpen, setIsOpen] = React.useState(false);

const [categoryData, setCategoryData] = useState([]);
const params = useParams();

useEffect(() => {
     axios.get(`/api/categories/list`)
  .then((result_data) => {
    const result = result_data.data;
    setCategoryData(result);
  }); 

}, []);

  return (
      <div className="headermenu">
        <Container fluid={true} className="p-0">
        <Row className="m-0">
          <Col sm="12" className="p-0">
            <Navbar expand="md" className="p-0 mmenu">
              <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
              <Collapse isOpen={isOpen} navbar>
                <Nav
                  className="me-auto"
                  navbar
                >

                    {categoryData.map((item , i) => (
                          <NavItem>
                            <NavLink href="#">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/menuicon/restaurant_Ic.png`}
                    alt="Menu-Icon"/>
                            {item.name}
                          </NavLink>
                          </NavItem>
                      ))}
                
                  {/* <NavItem>
                      <img src={`${process.env.PUBLIC_URL}/assets/images/menuicon/restaurant_Ic.png`} 
               alt="Menu-Icon"/>
                      
                      <Dropdown
                    title='Restaurants'
                  >
                    <Dropdown.Item
                    >
                      3 Star
                      <Dropdown.Submenu>
                        <Dropdown.Item>
                          Indian
                          <Dropdown.Submenu>
                        <Dropdown.Item>
                        <NavLink href="#">
                          Veg
                        </NavLink>
                        </Dropdown.Item>
                        <Dropdown.Item>
                        <NavLink href="#">
                          Non Veg
                        </NavLink>
                        </Dropdown.Item>
                      </Dropdown.Submenu>
                        </Dropdown.Item>
                        <Dropdown.Item>
                        <NavLink href="#">
                          Chinese
                        </NavLink>
                        </Dropdown.Item>
                        <Dropdown.Item>
                        <NavLink href="#">
                          Italian
                        </NavLink>
                        </Dropdown.Item>
                        <Dropdown.Item>
                        <NavLink href="#">
                          Syrian
                        </NavLink>
                        </Dropdown.Item>
                      </Dropdown.Submenu>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      5 Star
                    </Dropdown.Item>
                    <Dropdown.Item>
                      7 Star
                    </Dropdown.Item>
                  </Dropdown>
                   
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

                  </UncontrolledDropdown> */}


                  
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
