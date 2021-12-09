import React,{useState,useEffect} from 'react';
import Carousel from "react-multi-carousel";
import { Container, Row, Col, Navbar, NavbarBrand, NavbarToggler, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText, CarouselIndicators, CarouselItem, CarouselCaption, CarouselControl, Card, CardBody, CardTitle, CardSubtitle, CardText, List, ListInlineItem, Form, FormGroup, Input, InputGroup, select, option, Label, Button, NavItem, NavLink, Nav,TabContent,TabPane } from 'reactstrap'
import ReactStars from "react-rating-stars-component";
import "react-multi-carousel/lib/styles.css";
import './css/style.css'
import {useParams} from 'react-router-dom'


const Featured = (props) => {

  const params = useParams();
  const [featuredData, setFeaturedData] = useState([]);

  useEffect(() => {
  
    const config = {
        headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*', 'Authorization': 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IktyaXNobmEgTWlzaHJhIiwiZW1haWwiOiJrcmlzaG5hQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYzNjcwMzYxOCwiZXhwIjoxNjY4MjYwNTQ0fQ.eIG5Q29TaWU_B3-SpXQp38ROC3lO7dRCUTog5wkPWwQ'}
        };
 
    fetch('/api/featured-businesses?country='+`${params.id}` , config)
      .then(res => res.json())
      .then(
        (result) => {  
          setFeaturedData(result);
        },
        (error) => {
          
        }
        )
  }, []);

  console.log('Featured dealsData=',featuredData);

  const addDefaultSrc = (ev) => {
    ev.target.src = `${process.env.PUBLIC_URL}/assets/images/foodimg1.png`;
  }
  return (
      <div className="hotdeals">
       <Container className="p-0"> 
       {featuredData.length ? <h1>Featured businesses</h1> : '' }
       {featuredData.length > 6 ? <div className="seeall">
        <a href="/restaurants">SEE ALL</a>
      </div> : '' }
      <div style={{ position: "relative" }}>
        <Carousel responsive={responsive}>
        {featuredData.map((item , i ) => (
          <Col sm="12">
            <div className="customcard">
              <Card
              >
                <CardBody>
                  <Row>
                    <Col sm="4" xs="4">
                    <img onError={addDefaultSrc} src={`${process.env.PUBLIC_URL}/assets/images/foodimg1.png`} 
                     alt="Menu-Icon"/>
                   </Col>
                   <Col sm="8" xs="8">
                  <CardTitle tag="h5">
                    <a href={`${process.env.PUBLIC_URL}/resturent/details`}>
                    {item.business_name}
                    </a>
                  </CardTitle>
                  <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                  >
                  </CardSubtitle>
                  </Col>
                  </Row>
                  <CardText>
                  {item.about_business}
                  </CardText>
                  <Button>
                    <a href={`${process.env.PUBLIC_URL}/resturent/details/${item.id}`}>
                    SEE SALE
                  </a>
                  </Button>
                </CardBody>
              </Card>
            </div>
          </Col>
        ))}
        </Carousel>
      </div>
    </Container>
    </div>
  )
}

export default Featured;
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
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