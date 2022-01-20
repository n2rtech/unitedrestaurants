import React,{useState,useEffect} from 'react';
import Carousel from "react-multi-carousel";
import { Container, Row, Col, Navbar, NavbarBrand, NavbarToggler, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText, CarouselIndicators, CarouselItem, CarouselCaption, CarouselControl, Card, CardBody, CardTitle, CardSubtitle, CardText, List, ListInlineItem, Form, FormGroup, Input, InputGroup, select, option, Label, Button, NavItem, NavLink, Nav,TabContent,TabPane } from 'reactstrap'
import ReactStars from "react-rating-stars-component";
import "react-multi-carousel/lib/styles.css";
import './css/style.css'
import {useParams} from 'react-router-dom'
import { useLocation } from "react-router-dom";
import axios from 'axios';

const Hotdeals = (props) => {

  const params = useParams();
  const [hotData, setHotData] = useState([]);
  const code = localStorage.getItem('country_code');

  const search = useLocation().search;
  const country_code = new URLSearchParams(search).get("country");
  const catidsearch = new URLSearchParams(search).get("category");
  const searchvalue = new URLSearchParams(search).get("filter");

  useEffect(() => {
  
    const config = {
        headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*', 'Authorization': 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IktyaXNobmEgTWlzaHJhIiwiZW1haWwiOiJrcmlzaG5hQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYzNjcwMzYxOCwiZXhwIjoxNjY4MjYwNTQ0fQ.eIG5Q29TaWU_B3-SpXQp38ROC3lO7dRCUTog5wkPWwQ'}
        };
 
      if(country_code != '' && catidsearch  != '' && searchvalue) {
        axios.get(`/api/hot-deals?country=${country_code}&category=${catidsearch}&filter=${searchvalue}`)
        .then((getData) => {
          setHotData(getData.data);
        });
      } else {
        axios.get('/api/hot-deals?country='+`${code}` , config)
        .then((getData) => {
          setHotData(getData.data);
        });
      }
  }, []);

const addDefaultSrc = (ev) => {
  ev.target.src = `${process.env.PUBLIC_URL}/assets/images/foodimg1.png`;
}

  return (
      <div className="hotdeals">
       <Container className="p-0"> 
       {hotData.length ? <h1>hot deals you can't miss</h1> : '' }
       {hotData.length  > 6 ? <div className="seeall">
        <a href="/restaurants">SEE ALL</a>
      </div> : '' }
       
      <div style={{ position: "relative" }}>
        <Carousel responsive={responsive}>
        {hotData.map((item , i ) => (
          <Col sm="12">
            <div className="customcard">
              <Card>
                <div className="ribbon"><p> { item.discount.indexOf(".00") == '-1' ? item.discount : item.discount.substring(0,item.discount.indexOf(".")) }% off</p></div>
                <CardBody>
                  <Row>
                    <Col sm="12" xs="12">
                    <a href={`${process.env.PUBLIC_URL}/resturent/details/${item.user_id}`}>
                    <img onError={addDefaultSrc} src={`${process.env.PUBLIC_URL}/api/uploads/banner/${item.banner}`} 
                     alt="Menu-Icon"/>
                   </a>
                   </Col>
                   <Col sm="12" xs="12">
                  <CardTitle tag="h5">
                    <a href={`${process.env.PUBLIC_URL}/resturent/details/${item.user_id}`}>
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
                  {(item.about_business).substring(0, 140)}...
                 
                  </CardText>
                  <Button>
                   <a href={`${process.env.PUBLIC_URL}/resturent/details/${item.user_id}`}> SEE SALE</a>
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

export default Hotdeals;
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
