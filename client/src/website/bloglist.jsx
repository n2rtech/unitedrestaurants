import React,{useState,useEffect} from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap'
import Pagination from "react-js-pagination";
import axios from 'axios';


const Bloglist = (props) => {

  const [blogs, setBlogs] = useState([]);

  const [activePage, setActivePage] = useState(0);
  const [totalItemsCount, setTotalItemsCount] = useState(0); 
  const [pageRangeDisplayed, setPageRangeDisplayed] = useState(20);  
  const [pagesCount, setPagesCount] = useState(0);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(9);

  
  useEffect(() => {


    var config = {
      method: 'get',
      url: '/api/blogs/list/',
      headers: { 
        'Content-Type': 'application/json'
      },
      params : {
        'page': page,
        'size': size
      }
    };

    axios(config)
    .then(function (result) {
      setBlogs(result.data.blogs);
      setTotalItemsCount(result.data.totalItems);  
      setActivePage(result.data.currentPage);
      setPagesCount(result.data.totalPages);
    })
    .catch(function (error) {
    });

  }, []);


 const addDefaultSrc = (ev) => {
	ev.target.src = `${process.env.PUBLIC_URL}/assets/images/blog/blog-single.jpg`;
 }


     const handlePageChange = (pageNumber) => {

    var config = {
      method: 'get',
      url: '/api/blogs/list/',
      headers: { 
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      params : {
        'page': pageNumber,
        'size': size
      }
    };

    axios(config)
  .then(result=>{
      setBlogs(result.data.blogs);
      setTotalItemsCount(result.data.totalItems);  
      setActivePage(result.data.currentPage);
      setPagesCount(result.data.totalPages);
  });
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
            <div className="d-flex justify-content-center">
            <Pagination
            activePage={activePage}
            itemsCountPerPage={size}
            totalItemsCount={totalItemsCount}
            pageRangeDisplayed={pageRangeDisplayed}
            onChange={handlePageChange}
            itemClass="page-item"
            linkClass="page-link"
            prevPageText="Prev"
            nextPageText="Next"
            lastPageText="Last"
            firstPageText="First"

            />
            </div> 
            </Col>
      </Container>
    </div>
  );
}

export default Bloglist;
