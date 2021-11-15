import React,{useState} from 'react';
import { Container, Row, Col, Form, FormGroup, Input, Label, Button,NavItem, NavLink, Nav,TabContent,TabPane } from 'reactstrap'
import './css/styles.css'

const Header = (props) => {

  return (
      <Container fluid={true} className="p-0">
      <Row className="m-0">
        <Col xs="12" className="p-0">     
           HEADER
           <a target = "_blank" href={`${process.env.PUBLIC_URL}/login`} >Login</a>
        </Col>
        </Row>
      </Container>
  );
}

export default Header;