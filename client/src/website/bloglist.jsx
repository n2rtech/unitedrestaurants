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
import InfiniteScroll from 'react-infinite-scroll-component';

const Bloglist = (props) => {

  const params = useParams();

  const [items , setItems] = useState([]);
  const [hasMore, sethasMore] = useState(true);

  const [vendorData, setVendorData] = useState([]);
  const [activePage, setActivePage] = useState(0);
  const [totalItemsCount, setTotalItemsCount] = useState(0); 
  const [pageRangeDisplayed, setPageRangeDisplayed] = useState(20);  
  const [pagesCount, setPagesCount] = useState(0);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(3);
  const [filter, setFilter] = useState('');
  const [categoryName, setCategoryName] = useState('');
  const [country, setCountry] = useState(localStorage.getItem('country_code'));
  const [showPagination, setShowPagination] = useState(false);
  const [loader, setLoader] = useState(<BallTriangle color="#00BFFF" height={100} width={300} />);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const getComments = async () => {
      var config1 = {
        method: 'get',
        url: '/api/blogs/list/',
        headers: { 
          'Content-Type': 'application/json'
        },
        params : {
          'country': country,
          'page': page,
          'size': size,
          'new' : 1
        }
      };

      await axios(config1)
      .then(function (result) {
        console.log("START WITH FINISH END");
        setLoader('There are no business listing available');
        setItems(result.data.blogs);
        setVendorData(result.data.blogs);
        setTotalItemsCount(result.data.totalItems);  
        setActivePage(result.data.currentPage);
        setPagesCount(result.data.totalPages);
        setShowPagination(((result.data.totalItems > 0 ) ?? true));
      })
      .catch(function (error) {
      });

  
    };
    setPage(page + 1);
    getComments();
   }, []);

   const fetchComments = async () => {

    let url = `/api/blogs/list?country=${country}&page=${page}&size=${size}`;
    const res = await axios.get(url);
    const data = res.data.blogs;
    return data;
   } 

   const fetchData =  async () => {
    const commentsFromServer = await fetchComments();

    setItems([...items, ...commentsFromServer]);

    if(commentsFromServer.length === 0 || commentsFromServer.length < 3) {
      sethasMore(false);
    }
  
    setPage(page + 1);
 }


  useEffect(() => {


      // var config = {
      //   method: 'get',
      //   url: '/api/blogs/list/',
      //   headers: { 
      //     'Content-Type': 'application/json'
      //   },
      //   params : {
      //     'filter': filter,
      //     'country': country,
      //     'page': page,
      //     'size': size,
      //     'new' : 2
      //   }
      // };

      // axios(config)
      // .then(function (result) {
      //   setLoader('There is no business listing available');
      //   setVendorData(result.data.blogs);
      //   setTotalItemsCount(result.data.totalItems);  
      //   setActivePage(result.data.currentPage);
      //   setPagesCount(result.data.totalPages);
      //   setShowPagination(((result.data.totalItems > 0 ) ?? true));
      // })
      // .catch(function (error) {
      // });


      var config = {
        method: 'get',
        url: '/api/categories/getCatById/',
        headers: { 
          'Content-Type': 'application/json'
        }
      };

      axios(config)
      .then(function (result) {
        setCategoryName(result.data.name);
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
      url: '/api/blogs/list/',
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
      setVendorData(result.data.blogs);
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
      url: '/api/blogs/list/',
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
      setVendorData(result.data.blogs);
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
      url: '/api/blogs/list/',
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
      setVendorData(result.data.blogs);
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
      url: '/api/blogs/list/',
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
      setVendorData(result.data.blogs);
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
      url: '/api/blogs/list/'+'?filter='+filter+'&country='+country+'&page='+pagesCount+'&size='+size,
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
      setVendorData(result.data.blogs);
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
      url: '/api/blogs/list/',
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
      setVendorData(result.data.blogs);
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
          <div className="hotdeals Bloglist">
            <h4>Blogs</h4>
            { (items && items.length) ? 
            <Row>
            <InfiniteScroll
                    dataLength={items.length} 
                    next={fetchData}
                    hasMore={hasMore}
                    loader={<h4></h4>}
                    endMessage={
                      <p style={{ textAlign: 'center' }}>
                        <b>Yay! You have seen it all</b>
                      </p>
                    }>
                      <Row>
                              { (items).map((item , i) => (
                                <Col sm="4" key={i}>
                                    <div className="customcard">
                                    <Card>
                                      <div className="hImage">
                                        <a href={`${process.env.PUBLIC_URL}/blog/blogdetails/${item.id}`}>
                                          <img onError={addDefaultSrc} src={`${process.env.PUBLIC_URL}/api/uploads/blogs/${item.image}`} />
                                        </a>
                                      </div>
                                      <CardTitle tag="h5">
                                        <a href={`${process.env.PUBLIC_URL}/blog/blogdetails/${item.id}`}>{item.name}</a>
                                      </CardTitle>
                                      { (item.content.length <= 270) ?
                                        <CardText dangerouslySetInnerHTML={{__html: `${(item.content)}`}}>
                                        </CardText> 
                                        : 
                                        <CardText dangerouslySetInnerHTML={{__html: `${(item.content).substring(0, 270)} ...`}}>
                                        </CardText>
                                      }
                                      <Button><a href={`${process.env.PUBLIC_URL}/blog/blogdetails/${item.id}`}> SEE DETAILS</a></Button>
                                    </Card>
                                  </div>
                                  </Col>
                                  )) 
                              }
                      </Row>
                </InfiniteScroll>
            </Row>  
             : <p style={{ textAlign:'center' }}>There is no listing found!</p> }
          </div>
        </Container>
        <Footer2/>
      </Container>
  );
}

export default Bloglist;