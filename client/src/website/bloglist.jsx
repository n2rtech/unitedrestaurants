import React,{useState} from 'react';
import { Container, Row, Col, Pagination, PaginationItem, PaginationLink, Navbar, NavbarBrand, NavbarToggler, Collapse, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText, Carousel, CarouselIndicators, CarouselItem, CarouselCaption, CarouselControl, Card, CardBody, CardTitle, CardSubtitle, CardText, List, ListInlineItem, Form, FormGroup, Input, InputGroup, select, option, Label, Button, NavItem, NavLink, Nav,TabContent,TabPane } from 'reactstrap'
import './css/style.css'

const Bloglist = (props) => {

  return (
    <div className="homeblog">
      <h1>Blogs</h1>              
      <Container className="p-0">
        <div className="hr">
      <img src={`${process.env.PUBLIC_URL}/assets/images/hr.png`} 
                     alt="Menu-Icon"/>
       </div>
      <Row className="m-0">
        <Col sm="6" xs="12">
            <div className="customcard">
              <Card
              >
                <CardBody>
                  <Row>
                    <Col sm="3">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/blogone.jpg`} 
                     alt="Menu-Icon"/>
                   </Col>
                   <Col sm="9">
                  <CardTitle tag="h5">
                    Lorem ipsum
                  </CardTitle>
                  <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                  >
                  7 Hours ago
                  </CardSubtitle>
                  <CardText>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est sit.....<a href={`${process.env.PUBLIC_URL}/blog/blogdetails`} className="readmore">READ MORE</a>
                  </CardText>
                  
                  </Col>
                  </Row>
                </CardBody>
              </Card>
            </div>
          </Col>
          <Col sm="6" xs="12">
            <div className="customcard">
              <Card
              >
                <CardBody>
                  <Row>
                    <Col sm="3">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/blogone.jpg`} 
                     alt="Menu-Icon"/>
                   </Col>
                   <Col sm="9">
                  <CardTitle tag="h5">
                    Lorem ipsum
                  </CardTitle>
                  <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                  >
                  7 Hours ago
                  </CardSubtitle>
                  <CardText>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est sit.....<a href={`${process.env.PUBLIC_URL}/blog/blogdetails`} className="readmore">READ MORE</a>
                  </CardText>
                  
                  </Col>
                  </Row>
                </CardBody>
              </Card>
            </div>
          </Col>
          <Col sm="6" xs="12">
            <div className="customcard">
              <Card
              >
                <CardBody>
                  <Row>
                    <Col sm="3">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/blogone.jpg`} 
                     alt="Menu-Icon"/>
                   </Col>
                   <Col sm="9">
                  <CardTitle tag="h5">
                    Lorem ipsum
                  </CardTitle>
                  <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                  >
                  7 Hours ago
                  </CardSubtitle>
                  <CardText>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est sit.....<a href={`${process.env.PUBLIC_URL}/blog/blogdetails`} className="readmore">READ MORE</a>
                  </CardText>
                  
                  </Col>
                  </Row>
                </CardBody>
              </Card>
            </div>
          </Col>
          <Col sm="6" xs="12">
            <div className="customcard">
              <Card
              >
                <CardBody>
                  <Row>
                    <Col sm="3">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/blogone.jpg`} 
                     alt="Menu-Icon"/>
                   </Col>
                   <Col sm="9">
                  <CardTitle tag="h5">
                    Lorem ipsum
                  </CardTitle>
                  <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                  >
                  7 Hours ago
                  </CardSubtitle>
                  <CardText>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est sit.....<a href={`${process.env.PUBLIC_URL}/blog/blogdetails`} className="readmore">READ MORE</a>
                  </CardText>
                  
                  </Col>
                  </Row>
                </CardBody>
              </Card>
            </div>
          </Col>
          <Col sm="6" xs="12">
            <div className="customcard">
              <Card
              >
                <CardBody>
                  <Row>
                    <Col sm="3">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/blogone.jpg`} 
                     alt="Menu-Icon"/>
                   </Col>
                   <Col sm="9">
                  <CardTitle tag="h5">
                    Lorem ipsum
                  </CardTitle>
                  <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                  >
                  7 Hours ago
                  </CardSubtitle>
                  <CardText>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est sit.....<a href={`${process.env.PUBLIC_URL}/blog/blogdetails`} className="readmore">READ MORE</a>
                  </CardText>
                  
                  </Col>
                  </Row>
                </CardBody>
              </Card>
            </div>
          </Col>
          <Col sm="6" xs="12">
            <div className="customcard">
              <Card
              >
                <CardBody>
                  <Row>
                    <Col sm="3">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/blogone.jpg`} 
                     alt="Menu-Icon"/>
                   </Col>
                   <Col sm="9">
                  <CardTitle tag="h5">
                    Lorem ipsum
                  </CardTitle>
                  <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                  >
                  7 Hours ago
                  </CardSubtitle>
                  <CardText>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est sit.....<a href={`${process.env.PUBLIC_URL}/blog/blogdetails`} className="readmore">READ MORE</a>
                  </CardText>
                  
                  </Col>
                  </Row>
                </CardBody>
              </Card>
            </div>
          </Col>
          <Col sm="6" xs="12">
            <div className="customcard">
              <Card
              >
                <CardBody>
                  <Row>
                    <Col sm="3">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/blogone.jpg`} 
                     alt="Menu-Icon"/>
                   </Col>
                   <Col sm="9">
                  <CardTitle tag="h5">
                    Lorem ipsum
                  </CardTitle>
                  <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                  >
                  7 Hours ago
                  </CardSubtitle>
                  <CardText>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est sit.....<a href={`${process.env.PUBLIC_URL}/blog/blogdetails`} className="readmore">READ MORE</a>
                  </CardText>
                  
                  </Col>
                  </Row>
                </CardBody>
              </Card>
            </div>
          </Col>
          <Col sm="6" xs="12">
            <div className="customcard">
              <Card
              >
                <CardBody>
                  <Row>
                    <Col sm="3">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/blogone.jpg`} 
                     alt="Menu-Icon"/>
                   </Col>
                   <Col sm="9">
                  <CardTitle tag="h5">
                    Lorem ipsum
                  </CardTitle>
                  <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                  >
                  7 Hours ago
                  </CardSubtitle>
                  <CardText>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est sit.....<a href={`${process.env.PUBLIC_URL}/blog/blogdetails`} className="readmore">READ MORE</a>
                  </CardText>
                  
                  </Col>
                  </Row>
                </CardBody>
              </Card>
            </div>
          </Col>

        <Col sm="12" xs="12">
          <Pagination aria-label="Page navigation example">
            <PaginationItem disabled>
              <PaginationLink
                first
                href="#"
              />
            </PaginationItem>
            <PaginationItem disabled>
              <PaginationLink
                href="#"
                previous
              />
            </PaginationItem>
            <PaginationItem active>
              <PaginationLink href="#">
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">
                3
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">
                4
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                href="#"
                next
              />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                href="#"
                last
              />
            </PaginationItem>
          </Pagination>
        </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Bloglist;
