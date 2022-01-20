import React,{useState,useEffect} from 'react';
import { Container, Row, Col, Pagination, PaginationItem, PaginationLink, Card, CardBody, CardTitle, CardSubtitle, CardText, List, Button } from 'reactstrap'
import './css/style.css'
import { useParams } from "react-router-dom";
import axios from 'axios';

const Restaurantlist = (props) => {
  const params = useParams();

  const [vendorData, setVendorData] = useState([]);
  const [activePage, setActivePage] = useState(0);
  const [totalItemsCount, setTotalItemsCount] = useState(0);  
  const [pagesCount, setPagesCount] = useState(0);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(9);
  const [filter, setFilter] = useState('');
  const [country, setCountry] = useState(localStorage.getItem('country_code'));
  const [showPagination, setShowPagination] = useState(false);

  useEffect(() => {

    var config = {
      method: 'get',
      url: '/api/categories/getrestaurants/'+`${params.id}`,
      headers: { 
        'Content-Type': 'application/json'
      },
      params : {
        'filter': filter,
        'country': country,
        'page': page,
        'size': size
      }
    };

    axios(config)
    .then(function (result) {
      setVendorData(result.data.vendors);
      setTotalItemsCount(result.data.totalItems);  
      setActivePage(result.data.currentPage);
      setPagesCount(result.data.totalPages);
      setShowPagination(((result.data.totalItems > 0 ) ?? true));
    })
    .catch(function (error) {
    });

  }, []);

  const addDefaultSrc = (ev) => {
    ev.target.src = `${process.env.PUBLIC_URL}/assets/images/resturent/resturentimg1.jpg`;
  }

  const handlePreviousClick = (e) => {
    e.preventDefault();
    var config = {
      method: 'get',
      url: '/api/categories/getrestaurants/'+`${params.id}`,
      headers: { 
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      params : {
        'page': activePage-1,
        'size': size
      }
    };

    axios(config)
    .then(function (result) {
      setVendorData(result.data.vendors);
      setTotalItemsCount(result.data.totalItems);  
      setActivePage(result.data.currentPage);
      setPagesCount(result.data.totalPages);
      setShowPagination(((result.data.totalItems > 0 ) ?? true));
    })
    .catch(function (error) {
    });

  };


  const handleNextClick = (e) => {
    e.preventDefault();
    var config = {
      method: 'get',
      url: '/api/categories/getrestaurants/'+`${params.id}`,
      headers: { 
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      params : {
        'filter': filter,
        'country': country,
        'page': activePage+1,
        'size': size
      }
    };

    axios(config)
    .then(function (result) {
      setVendorData(result.data.vendors);
      setTotalItemsCount(result.data.totalItems);  
      setActivePage(result.data.currentPage);
      setPagesCount(result.data.totalPages);
      setShowPagination(((result.data.totalItems > 0 ) ?? true));
    })
    .catch(function (error) {
    });

  };

  const handlePageClick = (e, pageNumber) => {
    e.preventDefault();
    var config = {
      method: 'get',
      url: '/api/categories/getrestaurants/'+`${params.id}`,
      headers: { 
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      params : {
        'filter': filter,
        'country': country,
        'page': pageNumber+1,
        'size': size
      }
    };

    axios(config)
    .then(function (result) {
      setVendorData(result.data.vendors);
      setTotalItemsCount(result.data.totalItems);  
      setActivePage(result.data.currentPage);
      setPagesCount(result.data.totalPages);
      setShowPagination(((result.data.totalItems > 0 ) ?? true));
    })
    .catch(function (error) {

    });

  };

  const handleFirstClick = (e) => {
    e.preventDefault();
    var config = {
      method: 'get',
      url: '/api/categories/getrestaurants/'+`${params.id}`,
      headers: { 
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      params : {
        'filter': filter,
        'country': country,
        'page': page,
        'size': size
      }
    };

    axios(config)
    .then(function (result) {
      setVendorData(result.data.vendors);
      setTotalItemsCount(result.data.totalItems);  
      setActivePage(result.data.currentPage);
      setPagesCount(result.data.totalPages);
      setShowPagination(((result.data.totalItems > 0 ) ?? true));
    })
    .catch(function (error) {
    }); 

  };

  const handleLastClick = (e) => {

    e.preventDefault();
    var config = {
      method: 'get',
      url: '/api/categories/getrestaurants/'+`${params.id}`,
      headers: { 
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      params : {
        'filter': filter,
        'country': country,
        'page': pagesCount,
        'size': size
      }
    };

    axios(config)
    .then(function (result) {
      setVendorData(result.data.vendors);
      setTotalItemsCount(result.data.totalItems);  
      setActivePage(result.data.currentPage);
      setPagesCount(result.data.totalPages);
      setShowPagination(((result.data.totalItems > 0 ) ?? true));
    })
    .catch(function (error) {
    }); 

  };

  return (
    <div className="resturentlist">
      <h1>Restaurants</h1>              
      <Container className="p-0">
        <div className="hr">
      <img src={`${process.env.PUBLIC_URL}/assets/images/hr.png`} 
                     alt="Menu-Icon"/>
       </div>
      <Row className="m-0">
      {vendorData && (vendorData).map((item , i) => (
           <Col sm="4" xs="12" key={i}>     
           <div className="customcard">
           <Card>
             <CardBody>
               <Row>    
                 <Col sm="12" xs="12">
                    <a href={`${process.env.PUBLIC_URL}/resturent/details/${item.id}`}>
                    <img onError={addDefaultSrc} src={`${process.env.PUBLIC_URL}/api/uploads/banner/${item.banner}`} alt="Menu-Icon"/></a>
                 </Col>
                  
                 <Col sm="12" xs="12">
                  <CardTitle tag="h5">
                    <a href={`${process.env.PUBLIC_URL}/resturent/details/${item.id}`}></a>
                  </CardTitle>
                  <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                  > {item.name}
                  </CardSubtitle>
                  </Col>
                  </Row>
                  <CardText>
                      {item.about_business}
                  </CardText>
                  <Button>
                    <a href={`${process.env.PUBLIC_URL}/resturent/details/${item.id}`}>
                    VIEW
                  </a>
                  </Button>
                </CardBody>
              </Card>
             </div>
         </Col>
      ))}
       
        <Col sm="12" xs="12">
          {showPagination &&
        <Pagination aria-label="Page navigation example">
          <PaginationItem disabled={activePage <= 1}>
            <PaginationLink onClick={handleFirstClick} first/>
          </PaginationItem>
          <PaginationItem disabled={activePage <= 1}>
            <PaginationLink onClick={handlePreviousClick} previous/>
          </PaginationItem>
            {[...Array(pagesCount)].map((page, i) => (                                    
              <PaginationItem page={activePage} key={i} cc={(i+1)} active={(i+1) === activePage} key={i}>
                <PaginationLink disabled={(i+1) === activePage} onClick={e => handlePageClick(e, i)}>
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
          <PaginationItem disabled={activePage === pagesCount}>
            <PaginationLink onClick={handleNextClick} next />
          </PaginationItem>
          <PaginationItem disabled={activePage === pagesCount}>
            <PaginationLink onClick={handleLastClick} last />
          </PaginationItem>
        </Pagination>
        }
        </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Restaurantlist;
