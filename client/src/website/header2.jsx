import React,{useState,useMemo,Fragment} from 'react';
import { Container, Row, Col} from 'reactstrap'
import './css/header.css'
import Logo from './Logo.jsx'
import Navbarmenu from './Navbar.jsx'
import GoogleTranslate from './googletranslate';
import HeaderSocial from './HeaderSocial';
import SiteHeading from './SiteHeading';
                      
  const Header2 = () => {

  return (
      <div className="newHeader">
        <Container fluid={true}>
          <Row>
            <Col sm="2"><Logo/></Col>
            <Col sm="10">
              <Row>
                <Col sm="7"><SiteHeading/></Col>
                <Col sm="5">
                  <div className="bottomHeader">
                    <HeaderSocial/>
                    <Row className="header-right">
                      <Col sm="6">
                        <div className="glanguage">
                          <GoogleTranslate />
                        </div>
                      </Col>
                      <Col sm="6">
                        <a className="btn btn-primary" target = "_blank" href={`${process.env.PUBLIC_URL}/vendor/login`} >Vendor Login</a>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
              <Navbarmenu/>  
            </Col>      
          </Row>
        </Container>
      </div>
  );

}
export default Header2;
