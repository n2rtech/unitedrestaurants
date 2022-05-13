
import React,{useState,useEffect} from 'react';
import Carousel from "react-multi-carousel";
import { Container, Card, CardTitle, CardText, Button } from 'reactstrap'
import "react-multi-carousel/lib/styles.css";
import './css/header.css'
import axios from 'axios';

const Featured2 = () => {

  const [featuredData, setFeaturedData] = useState([]);
  const code = localStorage.getItem('country_code');

  
  useEffect( () => {
  
    async function getResult() {
      const config = {
        headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*', 'Authorization': 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IktyaXNobmEgTWlzaHJhIiwiZW1haWwiOiJrcmlzaG5hQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYzNjcwMzYxOCwiZXhwIjoxNjY4MjYwNTQ0fQ.eIG5Q29TaWU_B3-SpXQp38ROC3lO7dRCUTog5wkPWwQ'}
        };

          await axios.get('/api/featured-businesses?country='+`${code}` , config)
          .then((getData) => {
            setFeaturedData(getData.data);
          });
    }
     getResult();
    
  
  }, []);

  const addDefaultSrc = (ev) => {
    // ev.target.src = `${process.env.PUBLIC_URL}/assets/images/h4.jpeg`;
    // <a href="/FeaturedListing">SEE ALL</a>
    ev.target.src = `${process.env.PUBLIC_URL}/api/uploads/banner/thumbnail.jpg`;
  }

  return (
    <Container>
      <div className="hotdeals">
      {featuredData && featuredData.length ? <h1>Featured businesses</h1> : '' }
       {featuredData && featuredData.length > 6 ? <div className="seeall">
       
      </div> : '' }
      
        <div style={{ position: "relative" }}>
          <Carousel responsive={responsive}>
          {featuredData && featuredData.map((item , i ) => (
            <div className="customcard" key={i}>
              <Card> 
                <div className="hImage">
                <a href={`${process.env.PUBLIC_URL}/BusinessDetails/${item.user_id}`}>
                    <img onError={addDefaultSrc} style = {{ 'width': '348px' , 'height' : '232px' }} src={`${process.env.PUBLIC_URL}/api/uploads/banner/${item.banner}`} 
                     alt="Menu-Icon"/>
                      </a>
                </div>
                <CardTitle tag="h5">
                <a href={`${process.env.PUBLIC_URL}/BusinessDetails/${item.user_id}`}>
                    {item.business_name}
                    </a>
                </CardTitle>
                
                <CardText>
                {(item.about_business && item.about_business.length >= 100) ? (item.about_business.substring(0, 116) + "...") : item.about_business == 'null' ? '' : item.about_business}
                </CardText>
                <Button>{ item.user_id == 0 ?  
                    
                    <a href={`${process.env.PUBLIC_URL}/resturent/newdetails/${item.id}_${localStorage.getItem('country_code')}`}>
                    SEE DETAILS
                  </a> : 
                
                      <a href={`${process.env.PUBLIC_URL}/BusinessDetails/${item.user_id}`}>
                      SEE DETAILS
                    </a>
                }</Button>
              </Card>
            </div> 
            ))}

            
          </Carousel>
        </div>
      </div>
    </Container>
      
  );

}
export default Featured2;
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      spacing: 20
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      spacing: 20
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      spacing: 10
    }
  };
