import React,{useState} from 'react';
import { Container, Row, Col, Navbar, NavbarBrand, NavbarToggler, Collapse, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText, Form, FormGroup, Input, InputGroup, select, option, Label, Button, NavItem, NavLink, Nav,TabContent,TabPane } from 'reactstrap'
import './css/style.css'


const Advertise = (props) => {

  return (
      <div className="advertise">
        <Container fluid={true} className="p-0">
          <h2>advertise your business here</h2>
        <Row className="m-0">
          <Col sm="6" className="p-0">
            <div className="advertise-gridlarg">
              <div className="addname">
                Your AD Here
              </div>
              <Button>
                click to rent
              </Button>
            </div>
          </Col>
          <Col sm="3" className="pl-1 pr-1">
            <div className="advertise-gridsmall">
              <div className="addname">
                Your AD Here
              </div>
              <Button>
                click to rent
              </Button>
            </div>
          </Col>
          <Col sm="3" className="p-0">
            <div className="advertise-gridsmall">
              <div className="addname">
                Your AD Here
              </div>
              <Button>
                click to rent
              </Button>
            </div>
          </Col>
          </Row>
        </Container>
      </div>
  );
}

export default Advertise;