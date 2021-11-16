import React,{useState} from 'react';
import { Container, Row, Col, Form, FormGroup, Input, Label, Button,NavItem, NavLink, Nav,TabContent,TabPane } from 'reactstrap'
import './css/style.css'
const Footer = (props) => {

  return (
      <Container fluid={true} className="p-0">
      <Row className="m-0">
        <Col xs="12" className="p-0">     
          FOOTER
        </Col>
        </Row>
      </Container>
  );
}

export default Footer;
