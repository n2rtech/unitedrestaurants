import React,{useState,useMemo,Fragment} from 'react';
import { Container, Row, Col} from 'reactstrap'
import './css/header.css'
import Logo from './Logo.jsx'
import Menu from './menu.jsx'
import GoogleTranslate from './googletranslate';
import HeaderSocial from './HeaderSocial';
import SiteHeading from './SiteHeading';
import Countryflag from './countryflag';
                      
  const Header2 = () => {

  return (
    // DESKTOP HEADER 
      <div className="newHeader">
        <Container fluid={true}>
          <Row className="hidden-xs">
            <Col sm="2"><Logo/></Col>
            <Col sm="10">
              <Row>
                <Col sm="7"><SiteHeading/></Col>
                <Col sm="5">
                  <div className="bottomHeader">
                    <HeaderSocial/>
                    <Row className="header-right">
                      <div className="d-inline-flex">
                        <Countryflag />
                        <div className="glanguage">
                          <GoogleTranslate />
                        </div>
                        <a className="vendorIn btn btn-primary" target = "_blank" href={`${process.env.PUBLIC_URL}/vendor/login`} >Vendor Login</a>
                      </div>
                    </Row>
                  </div>
                </Col>
              </Row>
              <Menu/>  
            </Col>      
          </Row>
          <Row className="phoneHeader hidden-lg">
            <Col xs="6">
              <Menu/> <span className="openNav">Open Navbar</span>
            </Col>
            <Col xs="2" style={{paddingRight: "0"}}>
              <Countryflag />
            </Col>
            <Col xs="4" style={{paddingLeft: "0"}}>
              <a className="vendorIn btn btn-primary" target = "_blank" href={`${process.env.PUBLIC_URL}/vendor/login`} >Vendor Login</a>
            </Col>
            <Col xs="4" style={{paddingRight: "0"}}>
              <Logo/>
            </Col>
            <Col xs="8" style={{paddingLeft: "0"}}>
              <SiteHeading/>
            </Col>
          </Row>
        </Container>
      </div>

  );

}
export default Header2;