import React,{useState,useEffect} from 'react';
import Carousel from "react-multi-carousel";
import { Container, Row, Col, Card, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap'
import "react-multi-carousel/lib/styles.css";
import axios from 'axios';

const Latestadditions2 = (props) => {
  const [latestData, setLatestData] = useState([]);
  const code = localStorage.getItem('country_code');
  useEffect(() => {
  
    const config = {
        headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*', 'Authorization': 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IktyaXNobmEgTWlzaHJhIiwiZW1haWwiOiJrcmlzaG5hQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYzNjcwMzYxOCwiZXhwIjoxNjY4MjYwNTQ0fQ.eIG5Q29TaWU_B3-SpXQp38ROC3lO7dRCUTog5wkPWwQ'}
        };

          axios.get('/api/latest-additions?country='+`${code}` , config)
          .then((getData) => {
            setLatestData(getData.data);
          });

  }, []);

const addDefaultSrc = (ev) => {
  ev.target.src = `${process.env.PUBLIC_URL}/assets/images/foodimg1.png`;
}
  return (
      <div className="latestadditions">
        <Container className="p-0"> 
        {latestData && latestData.length ?  <h3>latest additions</h3> : '' }
       {latestData && latestData.length > 2 ?  <div className="seeall">
        <a href="/restaurants">SEE ALL</a>
      </div> : '' }
          <div style={{ position: "relative" }}>
          <Carousel responsive={responsive}>
        {latestData.map((item , i ) => (
          <Col sm="12" key={i}>
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
                    { item.user_id === 0 ?  
                    
                      <a href={`${process.env.PUBLIC_URL}/resturent/newdetails/${item.id}_${localStorage.getItem('country_code')}`}>
                      VIEW
                    </a> : 
                  
                        <a href={`${process.env.PUBLIC_URL}/resturent/details/${item.user_id}`}>
                        VIEW
                      </a>
                    }
                   
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

export default Latestadditions2;
  const responsive = {
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