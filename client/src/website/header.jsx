import React,{useState} from 'react';
import { Container, Row, Col, Form, FormGroup, Input, InputGroup, select, option, Label, Button, NavItem, NavLink, Nav,TabContent,TabPane } from 'reactstrap'
import './css/style.css'
import Menu from './menu.jsx'
import Countryflag from './countryflag.jsx'


const Header = (props) => {

  return (
      <div className="mainheader">
        <Container fluid={true}>
        <Row className="m-0">
          <Col sm="2">
            <div className="mainlogo">
              <img className="img-fluid" 
               src={`${process.env.PUBLIC_URL}/assets/images/mainlogo.png`} 
               alt="logo"/>
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
                <div className="clickable">
                <p>visitors</p>
                <a href="#">click here</a>
              </div>
              <div className="clickable">
                <p>restaurants</p>
                <a target = "_blank" href={`${process.env.PUBLIC_URL}/login`} >Login</a>
              </div>
              <div className="clickable">
                <p>how it works</p>
                <a href="#">click here</a>
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
                <select aria-label="Default select example" className="form-control">
                  <option>Language</option>
                  <option value="1">English</option>
                  <option value="2">Hindi</option>
                </select>
              </div>
              
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
  );
}

export default Header;