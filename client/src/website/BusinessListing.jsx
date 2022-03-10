import React,{useState,useMemo} from 'react';
import Header2 from './header2.jsx'
import Footer2 from './footer2.jsx'
import SearchBar from './SearchBar.jsx'
import Carousel from "react-multi-carousel";
import { Container, Row, Col, Card, CardTitle, CardText, Button } from 'reactstrap'
import "react-multi-carousel/lib/styles.css";


const BusinessListing = () => {


  return (
      <Container fluid={true} className="p-0">
        <Header2/>
        <SearchBar/>
        <Container>
          <div className="hotdeals BusinessListing">
            <h4>Restaurants</h4>
            <Row>
              <Col sm="4">
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
              </Col>
              <Col sm="4">
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
              </Col>
              <Col sm="4">
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
              </Col>
              <Col sm="4">
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
              </Col>
              <Col sm="4">
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
              </Col>
            </Row>    
          </div>
        </Container>
        <Footer2/>
      </Container>
  );
}

export default BusinessListing;