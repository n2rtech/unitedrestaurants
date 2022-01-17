import React,{useState,useEffect} from 'react';
import { Container, Row, Col, Pagination, PaginationItem, PaginationLink, Navbar, NavbarBrand, NavbarToggler, Collapse, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText, Carousel, CarouselIndicators, CarouselItem, CarouselCaption, CarouselControl, Card, CardBody, CardTitle, CardSubtitle, CardText, List, ListInlineItem, Form, FormGroup, Input, InputGroup, select, option, Label, Button, NavItem, NavLink, Nav,TabContent,TabPane } from 'reactstrap'
import './css/style.css'
import { useParams } from "react-router-dom";

const Restaurantlist = (props) => {
  const params = useParams();
  const [result, setResult] = useState([]);

  useEffect(() => {
  
    const config = {
        headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*', 'Authorization': 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IktyaXNobmEgTWlzaHJhIiwiZW1haWwiOiJrcmlzaG5hQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYzNjcwMzYxOCwiZXhwIjoxNjY4MjYwNTQ0fQ.eIG5Q29TaWU_B3-SpXQp38ROC3lO7dRCUTog5wkPWwQ'}
        };
 
    fetch("/api/categories/getrestaurants/"+`${params.id}` , config)
      .then(res => res.json())
      .then(
        (result) => {
          setResult(result);
        },
        (error) => {
          
        }
      )
  }, []);

  console.log("RESULT" , result);

  const addDefaultSrc = (ev) => {
    ev.target.src = `${process.env.PUBLIC_URL}/assets/images/resturent/resturentimg1.jpg`;
  }

  return (
    <div className="resturentlist">
      <h1>Restaurants</h1>              
      <Container className="p-0">
        <div className="hr">
      <img src={`${process.env.PUBLIC_URL}/assets/images/hr.png`} 
                     alt="Menu-Icon"/>
       </div>
      <Row className="m-0">
      {result && (result).map((item , i) => (
           <Col sm="4" xs="12">     
           <div className="customcardlist">
               <Card>
                 <CardBody>
                  <img className="img-fluid"  onError = {addDefaultSrc} src={`${process.env.PUBLIC_URL}/api/uploads/categories/${item.banner}`} 
                      alt="Menu-Icon"/>
 
                   <CardTitle tag="h5">
                     {item.name}
                   </CardTitle>
                   
                   <Button>
                     <a href={`${process.env.PUBLIC_URL}/resturent/details/${item.id}`}>Get Deals</a>
                   </Button>
                 </CardBody>
               </Card>
             </div>
         </Col>
      ))}
       
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
        </Row>
      </Container>
    </div>
  );
}

export default Restaurantlist;
