import React,{useState,useEffect,Fragment} from 'react';
import SideNav, { MenuIcon } from 'react-simple-sidenav';
import { Container, Row, Col, Form, FormGroup, Input, InputGroup, select, option, Label, Button, NavbarToggler, NavItem, NavLink,List,ListInlineItem, Nav,TabContent,TabPane,Collapse,Offcanvas,NavDropdown } from 'reactstrap'
import './css/style.css'
import Menu from './menu.jsx'
import Mobilemenu from './mobilemenu.jsx'
import Countryflag from './countryflag.jsx'
import GoogleTranslate from './googletranslate';
import axios from 'axios';

const Header = (props) => {
const [showNav, setShowNav] = useState();
const [countryData, setCountryData] = useState([]);
const [categoryData, setCategoryData] = useState([]);

console.log('Before Country Code' , localStorage.getItem('country_code'));

const OnChangeCountry = (event) => {
  localStorage.setItem('country_code' , event.target.value);
  window.location.reload(false);
}

console.log('After Country Code' , localStorage.getItem('country_code'));

useEffect(() => {
    axios.get(`/api/Countries/list`)
    .then((getData) => {
      setCountryData(getData.data);
    });


    axios.get(`/api/categories/list`)
    .then((result_data) => {
      const result = result_data.data;
      setCategoryData(result);
    }); 

  }, []);


const navItems = [
    
    <a href="/restaurants">
      Restaurants
    </a>,
    <a href="#">
      Food Markets
    </a>,
    <a href="#">
      Beer & Alcohol
    </a>,
    <a href="#">
      Services
    </a>,
    <a href="#">
      Suppliers
    </a>,
    <a href="#">
      Buy & Sell
    </a>,
    <a href="#">
      Jobs
    </a>,
    <a href="#">
      Videos
    </a>,
    <a href="#">
      Others
    </a>,
  ];

const title = <div className="searchbar">
                <FormGroup>
                    <div className="InputGroup">
                      <Input className="form-control" placeholder="Search in the department..." type="search"/>
                    </div>
                </FormGroup>
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
              </div>;
                      
  

  return (
      <div className="mainheader">
        <div className="desktopheader">
        <Container fluid={true}>
        <Row className="m-0">
          <Col sm="2">
            <div className="mainlogo">
              <a href="/home">
              <img className="img-fluid" 
               src={`${process.env.PUBLIC_URL}/assets/images/mainlogo.png`} 
               alt="logo"/>
               </a>
            </div>
          </Col>
          <Col sm="10">
            <Row>
              <Col sm="8">
                <div className="topcenter">
              <div className="textlogo"><img className="img-fluid" 
               src={`${process.env.PUBLIC_URL}/assets/images/textlogo.png`} 
               alt="text-logo"/></div>
               <div className="discountline">Discounts and Advertising Platform</div>
               <div className="savemore">Save more, directly order from the store</div>
               

            </div>
              </Col>
              <Col sm="4">
            <div className="topright">
              <div className="topmenu">
                <div className="clickable opacity0">
                  <p>visitors</p>
                  <a href={`${process.env.PUBLIC_URL}/visitors`}>click here</a>
                </div>
                <div className="clickable">
                  <p>visitors</p>
                  <a href={`${process.env.PUBLIC_URL}/visitors`}>click here</a>
                </div>
              <div className="clickable">
                <p>Vendors</p>
                <a target = "_blank" href={`${process.env.PUBLIC_URL}/vendor/login`} >login here</a>
              </div>
              </div>
              <div className="socialmenu">
                  <a href="#"><i className="fa fa-facebook"></i></a>
                  <a href="#"><i className="fa fa-twitter"></i></a>
                  <a href="#"><i className="fa fa-google-plus"></i></a>
                  <a href="#"><i className="fa fa-linkedin"></i></a>
                  <a href="#"><i className="fa fa-instagram"></i></a>
              </div>
              
            </div>
          </Col>
          <Col sm="12">
            <Row>
              <Col sm="8">
                <div className="searchbar">
                 <FormGroup>
                        <div className="InputGroup">
                <Input className="form-control" type="search"/>
                <button id="search" className="btn btn-primary">Search</button>
                </div>
              </FormGroup>
               </div>
              </Col>
              <Col sm="4">
                <div className="language-country">
                <div className="language">
                <GoogleTranslate />
              </div>
              
              <div className="country">
                <select aria-label="Default select example" onChange = {OnChangeCountry} className="form-control">
                {countryData.map((country , i ) => (
                  <Fragment key={i}>
                  <option value={country.code} selected = { localStorage.getItem('country_code') == country.code }>{country.name}</option>
                  </Fragment>
                  ))}
                </select>
              </div>
              </div>
              </Col>

              <Col sm="9">
                <Menu></Menu>
              </Col>
              <Col sm="3">
                <div className="countryflag">
                  <Countryflag></Countryflag>
                </div>
              </Col>
            </Row>
          </Col>
            </Row>
          </Col>

          
          
          </Row>
        </Container>
        </div>

<div className="mobileheader">
        <Container fluid={true} className="p-0">
        <Row className="m-0">
          <Col xs="2" className="p-0">
            <div className="togglebtn">
              <MenuIcon onClick={() => setShowNav(true)} />
              <SideNav showNav={showNav} onHideNav={() => setShowNav(false)} title={title} items={navItems} />
            </div>
          </Col>
          <Col xs="5" className="pr-0">
          <div className="language-country">
            <div className="language">
                <select aria-label="Default select example" className="form-control">
                  <option>Language</option>
                  <option value="1">English</option>
                  <option value="2">Hindi</option>
                </select>
              </div>
            </div>
          </Col>
          <Col xs="5" className="pl-0">
          <div className="language-country">
            <div className="country">
                <select aria-label="Default select example" className="form-control">
                  <option>Country</option>
                  <option value="1">India</option>
                  <option value="2">One</option>
                  <option value="2">Two</option>
                </select>
              </div>
            </div>
          </Col>
          <Col xs="12" className="p-0">
            <div className="topcenter">
              <div className="textlogo"><a href="/home"><img className="img-fluid" 
               src={`${process.env.PUBLIC_URL}/assets/images/textlogo.png`} 
               alt="text-logo"/></a></div>
               <div className="discountline">Discounts and Advertising Platform</div>
               <div className="savemore">Save more, directly order from the store</div>
            </div>
          </Col>
          <Col xs="12" className="p-0">
            <div className="topright">
              <div className="topmenu">
                <div className="clickable opacity0">
                  <p>visitors</p>
                  <a href="#">click here</a>
                </div>
                <div className="clickable">
                <p>visitors</p>
                <a href="#">click here</a>
              </div>
              <div className="clickable">
                <p>Vendors</p>
                <a target = "_blank" href={`${process.env.PUBLIC_URL}/vendor/login`} >login here</a>
              </div>
              </div>
              <div className="socialmenu">
                  <a href="#"><i className="fa fa-facebook"></i></a>
                  <a href="#"><i className="fa fa-twitter"></i></a>
                  <a href="#"><i className="fa fa-google-plus"></i></a>
                  <a href="#"><i className="fa fa-linkedin"></i></a>
                  <a href="#"><i className="fa fa-instagram"></i></a>
              </div>
              
            </div>
          </Col>

          </Row>
        </Container>
        </div>
      </div>
  );
}

export default Header;
