import React,{useState,useEffect} from 'react';
import { Container, Row, Col, Pagination, PaginationItem, PaginationLink, Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap'

const Bloglist = (props) => {

  const [blogs, setBlogs] = useState([]);
  
  useEffect(() => {
  
    const config = {
        headers: { 'Content-Type': 'application/json'}
        };
 
    fetch("/api/blogs/list" , config)
      .then(res => res.json())
      .then(
        (result) => {
          setBlogs(result);
        },
        (error) => {
          
        }
      )
  }, []);


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
                  <Col sm="6" key={i}>
                    <Row>
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
                      {item.createdAt}
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
