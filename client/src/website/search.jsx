import React,{useState,useEffect} from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardSubtitle, CardText,Button } from 'reactstrap'
import Header from './header.jsx'
import Carousel from "react-multi-carousel";
import Footer from './footer.jsx'
import axios from 'axios';
import "react-multi-carousel/lib/styles.css";
import {useParams} from 'react-router-dom'

const Home = (props) => {

  const params = useParams();

  useEffect(() => {
  
    const config = {
        headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*', 'Authorization': 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IktyaXNobmEgTWlzaHJhIiwiZW1haWwiOiJrcmlzaG5hQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYzNjcwMzYxOCwiZXhwIjoxNjY4MjYwNTQ0fQ.eIG5Q29TaWU_B3-SpXQp38ROC3lO7dRCUTog5wkPWwQ'}
        };
 
    fetch('/api/site-settings/getsettings' , config)
      .then(res => res.json())
      .then(
        (result) => {  
          
        },
        (error) => {
          
        }
        )
  }, []);

  const [featuredData, setFeaturedData] = useState([]);
  const [addSpaces, setAddSpaces] = useState([]);
  const [hotData, setHotData] = useState([]);
  const [latestData, setLatestData] = useState([]);

  var base64 = require('base-64');
  var decodedData = base64.decode(`${params.id}`);

  console.log("Countryde",decodedData);

  const country_code = decodedData.split("&country=").pop()
  const catidsearch = decodedData.split("&category=").pop()
  const searchvalue = decodedData.split("&filter=").pop()
  const country_codesearch = decodedData.split("&country=").pop()

  useEffect(() => {
  
    const config = {
        headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*', 'Authorization': 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IktyaXNobmEgTWlzaHJhIiwiZW1haWwiOiJrcmlzaG5hQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYzNjcwMzYxOCwiZXhwIjoxNjY4MjYwNTQ0fQ.eIG5Q29TaWU_B3-SpXQp38ROC3lO7dRCUTog5wkPWwQ'}
        };

        axios.get(`/api/hot-deals?${decodedData}`)
        .then((getData) => {
          setHotData(getData.data);
        });

        axios.get(`/api/featured-businesses?${decodedData}`)
          .then((getData) => {
            setFeaturedData(getData.data);
        });

        axios.get(`/api/ad-spaces/list?${decodedData}`)
        .then((getData) => {
          setAddSpaces(getData.data);
        });

  }, []);

  console.log("HOT DEALS" , hotData);

const addDefaultSrc = (ev) => {
  ev.target.src = `${process.env.PUBLIC_URL}/assets/images/foodimg1.png`;
}

  return (
      <Container fluid={true} className="p-0">
      <Row className="m-0">
        <Col xs="12" className="p-0">     
           <Header countrycode = {params.id}/>

    
      <div className="hotdeals">
       <Container className="p-0"> 
       <h1>hot deals you can't miss</h1>
       {hotData.length > 6 ? <div className="seeall">
        <a href="/restaurants">SEE ALL</a>
      </div> : '' }
       
      <div style={{ position: "relative" }}>
        <Carousel responsive={responsive}>
        {hotData && hotData.map((item , i ) => (
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
        )) } 
        </Carousel>
      </div>
      {hotData.length > 0 ? '' : <center><h5>There are no listing matching with your search keyword</h5></center>}
    </Container>
    </div>


    {/* FEATURED BUSINESSES */}
    
    <div className="hotdeals">
       <Container className="p-0"> 
       <h1>Featured businesses</h1>
       {featuredData.length > 6 ? <div className="seeall">
        <a href="/restaurants">SEE ALL</a>
      </div> : '' }
      <div style={{ position: "relative" }}>
        <Carousel responsive={responsive}>
        {featuredData ? featuredData.map((item , i ) => (
          <Col sm="12">
            <div className="customcard">
              <Card
              >
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
                    <a href={`${process.env.PUBLIC_URL}/resturent/details/${item.user_id}`}>
                    SEE SALE
                  </a>
                  </Button>
                </CardBody>
              </Card>
            </div>
          </Col>
        )) : ''}
        </Carousel>
      </div>
      {featuredData.length > 0 ? '' : <center><h5>There are no listing matching with your search keyword</h5></center>}
    </Container>
    </div>
    


          {/* ADVERTISMENT SPACES */}

      <div className="advertise">
        <Container fluid={true} className="p-0">
          <h2>advertise your business here</h2>
          
          <Row className="m-0">
            {addSpaces.length > 0 ? addSpaces.map((item , i  ) => (

                <Col sm="4" className="p-0">
                  <div className="advertise-gridlarg">
                    <img onError = {addDefaultSrc} className="img-fluid" src={`${process.env.PUBLIC_URL}/api/uploads/adspaces/${item.image}`} 
                          alt="Menu-Icon"/>
                  </div>

                </Col>
     
          ))  : '' }
         

        </Row>
        {addSpaces.length > 0 ? '' : <center><h5>There are no listing matching with your search keyword</h5></center>}
        </Container>
      </div>

      {/* LATEST ADDITIONS */}

      <div className="latestadditions">
       <Container className="p-0"> 
       <h3>latest additions</h3>
       {latestData.length > 2 ?  <div className="seeall">
        <a href="/restaurants">SEE ALL</a>
      </div> : '' }
      <div style={{ position: "relative" }}>
        <Carousel responsive={responsive}>
        {latestData.map((item , i ) => (
          <Col sm="12">
            <div className="customcard">
              <Card>
                 <CardBody>
                   <Row>
                    <Col sm="4" xs="4">
                    <img onError = {addDefaultSrc} src={`${process.env.PUBLIC_URL}/assets/images/foodimg1.png`} 
                     alt="Menu-Icon"/>
                   </Col>
                   <Col sm="8" xs="8">
                  <CardTitle tag="h5">
                    <a href={`${process.env.PUBLIC_URL}/resturent/details/${item.user_id}`}>
                    {item.business_name}
                  </a>
                  </CardTitle>
                  <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                  >
                    Joined {item.createdAt}
                  </CardSubtitle>
                  </Col>
                  </Row>
                  
                  <Button>
                    <a href={`${process.env.PUBLIC_URL}/resturent/details/${item.user_id}`}>
                    VIEW
                  </a>
                  </Button>
                </CardBody>
              </Card>
            </div>
          </Col>
        ))}
        </Carousel>
      </div>
      {latestData.length > 0 ? '' : <center><h6 style={{color: "white "}}>There are no listing matching with your search keyword</h6></center>}
    </Container>
    </div>


        <Footer />
           
        </Col>
        </Row>
      </Container>
  );
}

export default Home;
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