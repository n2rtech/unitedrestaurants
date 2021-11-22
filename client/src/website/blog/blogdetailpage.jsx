import React,{useState} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Container, Row, Col, Pagination, PaginationItem, PaginationLink, Navbar, NavbarBrand, NavbarToggler, Collapse, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText, Carousel, CarouselIndicators, CarouselItem, CarouselCaption, CarouselControl, Card, CardBody, CardTitle, CardSubtitle, CardText, List, ListInlineItem, Form, FormGroup, Input, InputGroup, select, option, Label, Button, NavItem, NavLink, Nav,TabContent,TabPane } from 'reactstrap'
import 'react-tabs/style/react-tabs.css';
import '../css/style.css'

const Detailpage = (props) => {

  return (
    <div className="detailpage">             
      <Container className="p-0">        
      <Row className="m-0">
        <h1>Blog Single</h1>
        </Row>

        
      </Container>
    </div>
  );
}

export default Detailpage;
