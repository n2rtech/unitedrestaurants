import React,{useState,useMemo,Fragment} from 'react';
import Carousel from "react-multi-carousel";
import { Container, Card, CardTitle, CardText, Button } from 'reactstrap'
import "react-multi-carousel/lib/styles.css";
import './css/header.css'
                      
const Featured2 = () => {

  return (
    <Container>
      <div className="hotdeals">
        <h4>Featured Businesses</h4>
        <div style={{ position: "relative" }}>
          <Carousel responsive={responsive}>
            <div className="customcard">
              <Card>
                
                <div className="hImage">
                  <a href={`#`}>
                    <img src={`${process.env.PUBLIC_URL}/assets/images/h5.jpeg`}/>
                  </a>
                </div>
                <CardTitle tag="h5">
                  <a href={`#`}>Restaurant name</a>
                </CardTitle>
                
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                </CardText>
                <Button><a href={`#`}> SEE DETAILS</a></Button>
              </Card>
            </div> 
            <div className="customcard">
              <Card>
                
                <div className="hImage">
                  <a href={`#`}>
                    <img src={`${process.env.PUBLIC_URL}/assets/images/h2.jpeg`}/>
                  </a>
                </div>
                <CardTitle tag="h5">
                  <a href={`#`}>Restaurant name</a>
                </CardTitle>
                
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                </CardText>
                <Button><a href={`#`}> SEE DETAILS</a></Button>
              </Card>
            </div>
            <div className="customcard">
              <Card>
                
                <div className="hImage">
                  <a href={`#`}>
                    <img src={`${process.env.PUBLIC_URL}/assets/images/h4.jpeg`}/>
                  </a>
                </div>
                <CardTitle tag="h5">
                  <a href={`#`}>Restaurant name</a>
                </CardTitle>
                
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                </CardText>
                <Button><a href={`#`}> SEE DETAILS</a></Button>
              </Card>
            </div>
            <div className="customcard">
              <Card>
                
                <div className="hImage">
                  <a href={`#`}>
                    <img src={`${process.env.PUBLIC_URL}/assets/images/h1.jpeg`}/>
                  </a>
                </div>
                <CardTitle tag="h5">
                  <a href={`#`}>Restaurant name</a>
                </CardTitle>
                
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                </CardText>
                <Button><a href={`#`}> SEE DETAILS</a></Button>
              </Card>
            </div>
            <div className="customcard">
              <Card>
                
                <div className="hImage">
                  <a href={`#`}>
                    <img src={`${process.env.PUBLIC_URL}/assets/images/h3.jpeg`}/>
                  </a>
                </div>
                <CardTitle tag="h5">
                  <a href={`#`}>Restaurant name</a>
                </CardTitle>
                
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                </CardText>
                <Button><a href={`#`}> SEE DETAILS</a></Button>
              </Card>
            </div>
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
