import React,{useState,useEffect,Fragment} from 'react';
import Carousel from "react-multi-carousel";
import { Container, Card, CardTitle, CardText, Button } from 'reactstrap'
import "react-multi-carousel/lib/styles.css";
import './css/header.css'
import axios from 'axios';

                      
const HotDeals2 = () => {

  const [hotData, setHotData] = useState([]);
  const code = localStorage.getItem('country_code');

  useEffect( async () => {
  
    const config = {
        headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*', 'Authorization': 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IktyaXNobmEgTWlzaHJhIiwiZW1haWwiOiJrcmlzaG5hQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYzNjcwMzYxOCwiZXhwIjoxNjY4MjYwNTQ0fQ.eIG5Q29TaWU_B3-SpXQp38ROC3lO7dRCUTog5wkPWwQ'}
        };

        await axios.get('/api/hot-deals?country='+`${code}` , config)
        .then((getData) => {
          setHotData(getData.data);
        });

  }, []);

const addDefaultSrc = (ev) => {
  ev.target.src = `${process.env.PUBLIC_URL}/assets/images/h4.jpeg`;
}


  return (
    <Container>
      <div className="hotdeals">
      {hotData && hotData.length ? <h1>Hot Deals you can't miss</h1> : '' }
      {hotData && hotData.length  > 6 ? <div className="seeall">
        <a href="/restaurants">SEE ALL</a>
      </div> : '' }
        <div style={{ position: "relative" }}>
          <Carousel responsive={responsive}>
            {hotData.map((item , i ) => (
            <div className="customcard">
                    <Card key = {i}>
                    <div className="ribbon"><p> {item.discount}% off</p></div>
                    <div className="hImage">
                      <a href={`${process.env.PUBLIC_URL}/BusinessDetails/${item.user_id}`}>
                        <img onError = {addDefaultSrc} src={`${process.env.PUBLIC_URL}/api/uploads/${item.banner}`}/>
                      </a>
                    </div>
                    <CardTitle tag="h5">
                      <a href={`${process.env.PUBLIC_URL}/BusinessDetails/${item.user_id}`}>{item.business_name}</a>
                    </CardTitle>
                    
                    <CardText>
                    {(item.about_business.substring(0, 100) + "...")}
                    </CardText>
                    <Button><a href={`${process.env.PUBLIC_URL}/BusinessDetails/${item.user_id}`}> SEE SALE</a></Button>
                  </Card>
              
            </div> 
            ))
            }
          </Carousel>
        </div>
      </div>
    </Container>
      
  );

}
export default HotDeals2;
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
