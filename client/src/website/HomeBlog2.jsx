import React,{useState,useMemo} from 'react';
import Carousel from "react-multi-carousel";
import { Container, Col, Card, CardTitle, CardText, Button} from 'reactstrap'
import "react-multi-carousel/lib/styles.css";

const HomeBlog2 = () => {


  return (
      <Container>
        <div className="blogs-section hotdeals">
          <h4>For you to read</h4>
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
                    <a href={`#`}>The Restaurant Expert</a>
                  </CardTitle>
                  <p>Posted 7 Hours ago</p>
                  <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                  </CardText>
                  <Button><a href={`#`}> Read More</a></Button>
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
                    <a href={`#`}>The Restaurant Expert</a>
                  </CardTitle>
                  <p>Posted 7 Hours ago</p>
                  <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                  </CardText>
                  <Button><a href={`#`}> Read More</a></Button>
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
                    <a href={`#`}>The Restaurant Expert</a>
                  </CardTitle>
                  <p>Posted 7 Hours ago</p>
                  <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                  </CardText>
                  <Button><a href={`#`}> Read More</a></Button>
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
                    <a href={`#`}>The Restaurant Expert</a>
                  </CardTitle>
                  <p>Posted 7 Hours ago</p>
                  <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                  </CardText>
                  <Button><a href={`#`}> Read More</a></Button>
                </Card>
              </div>
            </Carousel>
          </div>
        </div>
      </Container>
  )
}

export default HomeBlog2;
  const responsive = {
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
