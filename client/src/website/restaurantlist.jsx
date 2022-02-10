import React,{useState,useMemo} from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardSubtitle, CardText, List, Button } from 'reactstrap'
import { useParams } from "react-router-dom";
import axios from 'axios';

import Pagination from "react-js-pagination";

const Restaurantlist = (props) => {
  const params = useParams();

  const [vendorData, setVendorData] = useState([]);
  const [activePage, setActivePage] = useState(0);
  const [totalItemsCount, setTotalItemsCount] = useState(0); 
  const [pageRangeDisplayed, setPageRangeDisplayed] = useState(20);  
  const [pagesCount, setPagesCount] = useState(0);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(100);
  const [filter, setFilter] = useState('');
  const [country, setCountry] = useState(localStorage.getItem('country_code'));
  const [showPagination, setShowPagination] = useState(false);

  useMemo(() => {

    var config = {
      method: 'get',
      url: '/api/categories/getrest/'+`${params.id}`,
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
      url: '/api/categories/getrest/'+`${params.id}`,
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
      url: '/api/categories/getrest/'+`${params.id}`,
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
      url: '/api/categories/getrest/'+`${params.id}`,
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
      url: '/api/categories/getrest/'+`${params.id}`,
      headers: { 
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      params : {
        'filter'  : filter,
        'country' : country,
        'page'    : page,
        'size'    : size
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
      url: '/api/categories/getrest/'+`${params.id}`+'?filter='+filter+'&country='+country+'&page='+pagesCount+'&size='+size,
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


    const handlePageChange = (pageNumber) => {

    var config = {
      method: 'get',
      url: '/api/categories/getrest/'+`${params.id}`,
      headers: { 
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      params : {
        'filter': filter,
        'country': country,
        'page': pageNumber,
        'size': size
      }
    };

    axios(config)
  .then(result=>{
      setVendorData(result.data.vendors);
      setTotalItemsCount(result.data.totalItems);  
      setActivePage(result.data.currentPage);
      setPagesCount(result.data.totalPages);
      setShowPagination(((result.data.totalItems > 0 ) ?? true));
  });
}

  return (
    <div className="resturentlist">
      <h1>{params.cat}</h1>              
      <Container className="p-0">
        <div className="hr">
      <img src={`${process.env.PUBLIC_URL}/assets/images/hr.png`} 
                     alt="Menu-Icon"/>
       </div>
      <Row className="m-0">
      {vendorData.length > 0 ? (vendorData).map((item , i) => (
           <Col sm="4" xs="12" key={i}>     
           <div className="customcard">
           <Card>
             <CardBody>
               <Row>    
                 <Col sm="12" xs="12">
                    <a href={`${process.env.PUBLIC_URL}/resturent/details/${item.user_id}`}>
                    <img onError={addDefaultSrc} src={`${process.env.PUBLIC_URL}/api/uploads/banner/${item.banner}`} alt="Menu-Icon"/></a>
                 </Col>
                  
                 <Col sm="12" xs="12">
                  <CardTitle tag="h5">
                    <a href={`${process.env.PUBLIC_URL}/resturent/details/${item.user_id}`}></a>
                  </CardTitle>
                  <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                  > {item.business_name}
                  </CardSubtitle>
                  </Col>
                  </Row>
                  <CardText>
                      {item.about_business}
                  </CardText>

                  { item.user_id == 0 ?  
                     <Button>
                    <a href={`${process.env.PUBLIC_URL}/resturent/newdetails/${item.id}_${localStorage.getItem('country_code')}`}>
                    VIEW
                  </a> </Button> : 
                <Button><a href={`${process.env.PUBLIC_URL}/resturent/details/${item.user_id}`}>
                VIEW
              </a></Button>
                      
                }
                
                </CardBody>
              </Card>
             </div>
         </Col>
      )) : <Col><center>There are no business listing available</center></Col> }
       
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
        </Row>
      </Container>
    </div>
  );
}

export default Restaurantlist;
