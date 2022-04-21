import React,{useState,useEffect} from 'react';
import Header2 from './header2.jsx'
import Footer2 from './footer2.jsx'
import SearchBar from './SearchBar.jsx'
import Carousel from "react-multi-carousel";
import { Container, Row, Col, Card, CardTitle, CardText, Button } from 'reactstrap'
import { useParams } from "react-router-dom";
import axios from 'axios';
import { BallTriangle } from  'react-loader-spinner'
import Pagination from "react-js-pagination";
import "react-multi-carousel/lib/styles.css";

const BusinessListing = (props) => {

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
  const [loader, setLoader] = useState(<BallTriangle color="#00BFFF" height={100} width={300} />);

  useEffect(() => {

    setTimeout(async () => {
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
        setLoader('There are no business listing available');
        setVendorData(result.data.vendors);
        setTotalItemsCount(result.data.totalItems);  
        setActivePage(result.data.currentPage);
        setPagesCount(result.data.totalPages);
        setShowPagination(((result.data.totalItems > 0 ) ?? true));
      })
      .catch(function (error) {
      });
    }, 1000)
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
      <Container fluid={true} className="p-0">
        <Header2/>
        <SearchBar/>
        <Container>
          <div className="hotdeals BusinessListing">
            <h4>Restaurants</h4>
            <Row>
              { (vendorData && vendorData.length) ? (vendorData).map((item , i) => (
              <Col sm="4" key={i}>
                <div className="customcard">
                  <Card>
                    <div className="hImage">
                      <a href={`${process.env.PUBLIC_URL}/BusinessDetails/${item.id}`}>
                        <img onError={addDefaultSrc} src={`${process.env.PUBLIC_URL}/api/uploads/banner/${item.banner}`} />
                      </a>
                    </div>
                    <CardTitle tag="h5">
                      <a href={`${process.env.PUBLIC_URL}/BusinessDetails/${item.id}`}>{item.business_name}</a>
                    </CardTitle>
                    <CardText>
                      {item.about_business}
                    </CardText>
                    <Button><a href={`${process.env.PUBLIC_URL}/BusinessDetails/${item.id}`}> SEE DETAILS</a></Button>
                  </Card>
                </div>
              </Col>
              )) : <Col style={{padding: "16px",display: "flex", 'alignItems': "center", 'flexWrap': "wrap",'justifyContent': "center"}}><center>{loader}</center></Col> 
              }

              
            </Row>  

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

          </div>
        </Container>
        <Footer2/>
      </Container>
  );
}

export default BusinessListing;