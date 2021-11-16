import React,{useState} from 'react';
import { Container, Row, Col, Navbar, NavbarBrand, NavbarToggler, Collapse, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText, Carousel, CarouselIndicators, CarouselItem, CarouselCaption, CarouselControl, Card, CardBody, CardTitle, CardSubtitle, CardText, List, ListInlineItem, Form, FormGroup, Input, InputGroup, select, option, Label, Button, NavItem, NavLink, Nav,TabContent,TabPane } from 'reactstrap'
import './css/style.css'


const Hotdeals = (props) => {

return (
<div className="hotdeals">
  <Container className="p-0">
    <Row className="m-0">
      <Col sm="12" className="p-0">
      <h1>hot deals you can't miss</h1>

      <Row>
        <Col sm="4" xs="12">
        <div>
          <Card
          >
          <CardBody>
            <CardTitle tag="h5">
              Card title
            </CardTitle>
            <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
            >
            Card subtitle
          </CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </CardText>
          <Button>
            Button
          </Button>
        </CardBody>
      </Card>
    </div>
  </Col>
  <Col sm="4" xs="12">
        <div>
          <Card
          >
          <CardBody>
            <CardTitle tag="h5">
              Card title
            </CardTitle>
            <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
            >
            Card subtitle
          </CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </CardText>
          <Button>
            Button
          </Button>
        </CardBody>
      </Card>
    </div>
  </Col>
  <Col sm="4" xs="12">
        <div>
          <Card
          >
          <CardBody>
            <CardTitle tag="h5">
              Card title
            </CardTitle>
            <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
            >
            Card subtitle
          </CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </CardText>
          <Button>
            Button
          </Button>
        </CardBody>
      </Card>
    </div>
  </Col>
</Row>
      
</Col>
</Row>
</Container>
</div>
);
}

export default Hotdeals;