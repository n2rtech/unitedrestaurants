import React,{useState,useEffect} from 'react';
import Carousel from "react-multi-carousel";
import { Container, Row, Col, Navbar, NavbarBrand, NavbarToggler, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText, CarouselIndicators, CarouselItem, CarouselCaption, CarouselControl, Card, CardBody, CardTitle, CardSubtitle, CardText, List, ListInlineItem, Form, FormGroup, Input, InputGroup, select, option, Label, Button, NavItem, NavLink, Nav,TabContent,TabPane } from 'reactstrap'
import ReactStars from "react-rating-stars-component";
import "react-multi-carousel/lib/styles.css";
import './css/style.css'
import axios from 'axios';

const Homeblog = (props) => {

  const [blogData, setBlogData] = useState([]);

  useEffect(() => {

    axios.get(`/api/blogs/get`)
    .then((result) => {
      setBlogData(result.data);
    }); 

  }, []);


  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
      <div className="homeblog">
       <Container className="p-0"> 
      <h1>for you to read</h1>
      <div className="seeall">
        <a href="/blog">SEE ALL</a>
      </div>
      <div style={{ position: "relative" }}>
        <Carousel responsive={responsive}>

        {blogData.map((blog , i ) => (
          <Col key={i} sm="12">
            <div className="customcard">
              <Card
              >
                <CardBody>
                  <Row>
                    <Col sm="3" xs="12">
                    <img src={`${process.env.PUBLIC_URL}/blogs/${blog.image}`} 
                     alt="Menu-Icon" className="img-fluid" />
                   </Col>
                   <Col sm="9" xs="12">
                  <CardTitle tag="h5">
                    {blog.name}
                  </CardTitle>
                  <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                  >
                  7 Hours ago
                  </CardSubtitle>
                  <CardText>
                   {`${(blog.content).substring(0, 270)}...`}<a href={`${process.env.PUBLIC_URL}/blog/blogdetails`} className="readmore">READ MORE</a>
                  </CardText>
                  
                  </Col>
                  </Row>
                </CardBody>
              </Card>
            </div>
          </Col>
          ))}
          <Col sm="12">
            <div className="customcard">
              <Card
              >
                <CardBody>
                  <Row>
                    <Col sm="3" xs="12">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/blogone.jpg`} 
                     alt="Menu-Icon" className="img-fluid" />
                   </Col>
                   <Col sm="9" xs="12">
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
          <Col sm="12">
            <div className="customcard">
              <Card
              >
                <CardBody>
                  <Row>
                    <Col sm="3" xs="12">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/blogone.jpg`} 
                     alt="Menu-Icon" className="img-fluid" />
                   </Col>
                   <Col sm="9" xs="12">
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
          <Col sm="12">
            <div className="customcard">
              <Card
              >
                <CardBody>
                  <Row>
                    <Col sm="3" xs="12">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/blogone.jpg`} 
                     alt="Menu-Icon" className="img-fluid" />
                   </Col>
                   <Col sm="9" xs="12">
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
          <Col sm="12">
            <div className="customcard">
              <Card
              >
                <CardBody>
                  <Row>
                    <Col sm="3" xs="12">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/blogone.jpg`} 
                     alt="Menu-Icon" className="img-fluid" />
                   </Col>
                   <Col sm="9" xs="12">
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
          <Col sm="12">
            <div className="customcard">
              <Card
              >
                <CardBody>
                  <Row>
                    <Col sm="3" xs="12">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/blogone.jpg`} 
                     alt="Menu-Icon" className="img-fluid" />
                   </Col>
                   <Col sm="9" xs="12">
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
        </Carousel>
      </div>
    </Container>
    </div>
  )
}

export default Homeblog;
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };