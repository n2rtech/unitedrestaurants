import React,{useState} from 'react';
import { Container, Row, Col, Pagination, PaginationItem, PaginationLink, Navbar, NavbarBrand, NavbarToggler, Collapse, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText, Carousel, CarouselIndicators, CarouselItem, CarouselCaption, CarouselControl, Card, CardBody, CardTitle, CardSubtitle, CardText, List, ListInlineItem, Form, FormGroup, Input, InputGroup, select, option, Label, Button, NavItem, NavLink, Nav,TabContent,TabPane } from 'reactstrap'
import './css/style.css'

const Resturentlist = (props) => {

  return (
    <div className="resturentlist">
      <h1>Restaurants</h1>              
      <Container className="p-0">
        <div className="hr">
      <img src={`${process.env.PUBLIC_URL}/assets/images/hr.png`} 
                     alt="Menu-Icon"/>
       </div>
      <Row className="m-0">
        <Col sm="4" xs="12">     
          <div className="customcardlist">
              <Card
              >
              
                <CardBody>
                  
                  <img className="img-fluid" src={`${process.env.PUBLIC_URL}/assets/images/resturent/resturentimg1.jpg`} 
                     alt="Menu-Icon"/>

                  <CardTitle tag="h5">
                    Tumbleweed Bar
                  </CardTitle>
                  
                  <Button>
                    Get Deals
                  </Button>
                </CardBody>
              </Card>
            </div>
        </Col>
        <Col sm="4" xs="12">     
          <div className="customcardlist">
              <Card
              >
              
                <CardBody>
                  
                  <img className="img-fluid" src={`${process.env.PUBLIC_URL}/assets/images/resturent/resturentimg1.jpg`} 
                     alt="Menu-Icon"/>

                  <CardTitle tag="h5">
                    Tumbleweed Bar
                  </CardTitle>
                  
                  <Button>
                    Get Deals
                  </Button>
                </CardBody>
              </Card>
            </div>
        </Col>
        <Col sm="4" xs="12">     
          <div className="customcardlist">
              <Card
              >
              
                <CardBody>
                  
                  <img className="img-fluid" src={`${process.env.PUBLIC_URL}/assets/images/resturent/resturentimg1.jpg`} 
                     alt="Menu-Icon"/>

                  <CardTitle tag="h5">
                    Tumbleweed Bar
                  </CardTitle>
                  
                  <Button>
                    Get Deals
                  </Button>
                </CardBody>
              </Card>
            </div>
        </Col>
        <Col sm="4" xs="12">     
          <div className="customcardlist">
              <Card
              >
              
                <CardBody>
                  
                  <img className="img-fluid" src={`${process.env.PUBLIC_URL}/assets/images/resturent/resturentimg1.jpg`} 
                     alt="Menu-Icon"/>

                  <CardTitle tag="h5">
                    Tumbleweed Bar
                  </CardTitle>
                  
                  <Button>
                    Get Deals
                  </Button>
                </CardBody>
              </Card>
            </div>
        </Col>
        <Col sm="4" xs="12">     
          <div className="customcardlist">
              <Card
              >
              
                <CardBody>
                  
                  <img className="img-fluid" src={`${process.env.PUBLIC_URL}/assets/images/resturent/resturentimg1.jpg`} 
                     alt="Menu-Icon"/>

                  <CardTitle tag="h5">
                    Tumbleweed Bar
                  </CardTitle>
                  
                  <Button>
                    Get Deals
                  </Button>
                </CardBody>
              </Card>
            </div>
        </Col>
        <Col sm="4" xs="12">     
          <div className="customcardlist">
              <Card
              >
              
                <CardBody>
                  
                  <img className="img-fluid" src={`${process.env.PUBLIC_URL}/assets/images/resturent/resturentimg1.jpg`} 
                     alt="Menu-Icon"/>

                  <CardTitle tag="h5">
                    Tumbleweed Bar
                  </CardTitle>
                  
                  <Button>
                    Get Deals
                  </Button>
                </CardBody>
              </Card>
            </div>
        </Col>
        <Col sm="4" xs="12">     
          <div className="customcardlist">
              <Card
              >
              
                <CardBody>
                  
                  <img className="img-fluid" src={`${process.env.PUBLIC_URL}/assets/images/resturent/resturentimg1.jpg`} 
                     alt="Menu-Icon"/>

                  <CardTitle tag="h5">
                    Tumbleweed Bar
                  </CardTitle>
                  
                  <Button>
                    Get Deals
                  </Button>
                </CardBody>
              </Card>
            </div>
        </Col>
        <Col sm="4" xs="12">     
          <div className="customcardlist">
              <Card
              >
              
                <CardBody>
                  
                  <img className="img-fluid" src={`${process.env.PUBLIC_URL}/assets/images/resturent/resturentimg1.jpg`} 
                     alt="Menu-Icon"/>

                  <CardTitle tag="h5">
                    Tumbleweed Bar
                  </CardTitle>
                  
                  <Button>
                    Get Deals
                  </Button>
                </CardBody>
              </Card>
            </div>
        </Col>
        <Col sm="4" xs="12">     
          <div className="customcardlist">
              <Card
              >
              
                <CardBody>
                  
                  <img className="img-fluid" src={`${process.env.PUBLIC_URL}/assets/images/resturent/resturentimg1.jpg`} 
                     alt="Menu-Icon"/>

                  <CardTitle tag="h5">
                    Tumbleweed Bar
                  </CardTitle>
                  
                  <Button>
                    Get Deals
                  </Button>
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

export default Resturentlist;
