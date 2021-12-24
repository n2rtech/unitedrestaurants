import React,{useState,useEffect} from 'react';
import Carousel from "react-multi-carousel";
import { Container, Row, Col, Navbar, NavbarBrand, NavbarToggler, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText, CarouselIndicators, CarouselItem, CarouselCaption, CarouselControl, Card, CardBody, CardTitle, CardSubtitle, CardText, List, ListInlineItem, Form, FormGroup, Input, InputGroup, select, option, Label, Button, NavItem, NavLink, Nav,TabContent,TabPane } from 'reactstrap'
import "react-multi-carousel/lib/styles.css";
import './css/style.css'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'
import ReactTimeAgo from 'react-time-ago'
TimeAgo.addLocale(en)

const Homeblog = () => {

  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
  
    const config = {
        headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*', 'Authorization': 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IktyaXNobmEgTWlzaHJhIiwiZW1haWwiOiJrcmlzaG5hQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYzNjcwMzYxOCwiZXhwIjoxNjY4MjYwNTQ0fQ.eIG5Q29TaWU_B3-SpXQp38ROC3lO7dRCUTog5wkPWwQ'}
        };
 
    fetch("/api/blogs/get" , config)
      .then(res => res.json())
      .then(
        (result) => {
          
          setBlogData(result);
        },
        (error) => {
          
        }
      )
  }, []);

  const addDefaultSrc = (ev) => {
    ev.target.src = `${process.env.PUBLIC_URL}/assets/images/blog/user.png`;
  }

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
              { blog.show_on_home  == 1 ? 

              <Card>
                <CardBody>
                  <Row>
                    <Col sm="3" xs="12">
                    <img onError={addDefaultSrc} src={`${process.env.PUBLIC_URL}/blogs/${blog.image}`} 
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
                  <ReactTimeAgo date={blog.createdAt} locale="en-US"/>
                  </CardSubtitle>
                  <CardText>
                   {`${(blog.content).substring(0, 270)}...`}<a href={`${process.env.PUBLIC_URL}/blog/blogdetails/${blog.id}`} className="readmore">READ MORE</a>
                  </CardText>
                  
                  </Col>
                  </Row>
                </CardBody>
              </Card>
              
                :
              
                ''
              
              }
              
            </div>
          </Col>
          ))}
          
         
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
