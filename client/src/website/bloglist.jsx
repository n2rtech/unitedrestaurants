import React,{useState,useEffect} from 'react';
import { Container, Row, Col, Pagination, PaginationItem, PaginationLink, Navbar, NavbarBrand, NavbarToggler, Collapse, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText, Carousel, CarouselIndicators, CarouselItem, CarouselCaption, CarouselControl, Card, CardBody, CardTitle, CardSubtitle, CardText, List, ListInlineItem, Form, FormGroup, Input, InputGroup, select, option, Label, Button, NavItem, NavLink, Nav,TabContent,TabPane } from 'reactstrap'
import './css/style.css'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'
import ReactTimeAgo from 'react-time-ago'
TimeAgo.addLocale(en)

const Bloglist = (props) => {

  const [blogs, setBlogs] = useState([]);
  
  useEffect(() => {
  
    const config = {
        headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*', 'Authorization': 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IktyaXNobmEgTWlzaHJhIiwiZW1haWwiOiJrcmlzaG5hQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYzNjcwMzYxOCwiZXhwIjoxNjY4MjYwNTQ0fQ.eIG5Q29TaWU_B3-SpXQp38ROC3lO7dRCUTog5wkPWwQ'}
        };
 
    fetch("/api/blogs" , config)
      .then(res => res.json())
      .then(
        (result) => {
          setBlogs(result);
        },
        (error) => {
          
        }
      )
  }, []);

  console.log(blogs);


 const addDefaultSrc = (ev) => {
	ev.target.src = `${process.env.PUBLIC_URL}/assets/images/blog/blog-single.jpg`;
 }

  return (
    <div className="homeblog blog-listing">
      <h1>Blogs</h1>              
      <Container className="p-0">
        <div className="hr">
      <img src={`${process.env.PUBLIC_URL}/assets/images/hr.png`} alt="Menu-Icon"/>
       </div>
            <div className="customcard">
              <Card>
                <CardBody>
                <Row>
                 {blogs.map((item , i ) => ( 
                  <Col sm="6">
                    <Row key={i}>
                      <Col sm="3">
                      <img onError = {addDefaultSrc} src={`${process.env.PUBLIC_URL}/api/uploads/blogs/${item.image}`} 
                       alt="Menu-Icon"/>
                     </Col>
                     <Col sm="9">
                      <CardTitle tag="h5">
                        {item.name}
                      </CardTitle>
                      <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                      >
                      <ReactTimeAgo date={item.createdAt} locale="en-US"/>
                      </CardSubtitle>
                      <CardText>


                      <div dangerouslySetInnerHTML={{__html: `<p>${item.content}</p>`}} /><a href={`${process.env.PUBLIC_URL}/blog/blogdetails/${item.id}`} className="readmore">READ MORE</a>
                      </CardText>
                    </Col>
                    </Row>
                  </Col>
                  ))}
                </Row>  
                </CardBody>
              </Card>
            </div>

        

        <Col sm="12" xs="12">
          <Pagination aria-label="Page navigation example">
            <PaginationItem disabled>
              <PaginationLink
                first
                href="#"
              />
            </PaginationItem>
            <PaginationItem disabled>
              <PaginationLink
                href="#"
                previous
              />
            </PaginationItem>
            <PaginationItem active>
              <PaginationLink href="#">
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">
                3
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">
                4
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                href="#"
                next
              />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                href="#"
                last
              />
            </PaginationItem>
          </Pagination>
        </Col>
      </Container>
    </div>
  );
}

export default Bloglist;
