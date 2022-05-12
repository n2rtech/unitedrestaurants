import React,{useState,useEffect} from 'react';
import Header2 from './header2.jsx'
import Footer2 from './footer2.jsx'
import { Container, Row, Col, Card, CardTitle, CardText, Button } from 'reactstrap'
import { useParams } from "react-router-dom";
import axios from 'axios';
import { BallTriangle } from  'react-loader-spinner'
import Pagination from "react-js-pagination";
import InfiniteScroll from 'react-infinite-scroll-component';

const HotDealsListing = (props) => {

  const params = useParams();

  const [items , setItems] = useState([]);
  const [hasMore, sethasMore] = useState(true);

  const [page, setPage] = useState(1);
  const [size, setSize] = useState(4);
  const [country, setCountry] = useState(localStorage.getItem('country_code'));
  const [loader, setLoader] = useState(<BallTriangle color="#00BFFF" height={100} width={300} />);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const getComments = async () => {
      var config1 = {
        method: 'get',
        url: '/api/hot-deals/deals/all/',
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
        setLoader('There are no business listing available');
        setItems(result.data.vendors);
      })
      .catch(function (error) {
      });

  
    };
    setPage(page + 1);
    getComments();
   }, []);

   const fetchComments = async () => {

    let url = `/api/hot-deals/deals/all?country=${country}&page=${page}&size=${size}`;
    const res = await axios.get(url);
    const data = res.data.vendors;
    return data;
   } 

   const fetchData =  async () => {
    const commentsFromServer = await fetchComments();

    setItems([...items, ...commentsFromServer]);

    if(commentsFromServer.length === 0 || commentsFromServer.length < 4) {
      sethasMore(false);
    }
  
    setPage(page + 1);
 }
 
 const uniqueTags = [];
 items.map((item) => {
   var findItem = uniqueTags.find((x) => x.user_id === item.user_id);
   if (!findItem) uniqueTags.push(item);
 });

  const addDefaultSrc = (ev) => {
    // ev.target.src = `${process.env.PUBLIC_URL}/assets/images/resturent/resturentimg1.jpg`;
    ev.target.src = `${process.env.PUBLIC_URL}/api/uploads/banner/thumbnail.jpg`;
  }

 
  return (
      <Container fluid={true} className="p-0">
        <Header2/>
        <Container>
          <div className="hotdeals HotDealsListing">
            <h4>HOT DEALS YOU CAN'T MISS</h4>
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
                              { (uniqueTags).map((item , i) => (
                                <Col sm="4" key={i}>
                                    <div className="customcard">
                                    <Card>
                                      <div className="hImage">
                                        <a href={`${process.env.PUBLIC_URL}/BusinessDetails/${item.user_id}`}>
                                          <img onError={addDefaultSrc} style = {{ 'width': '348px' , 'height' : '232px' }} src={`${process.env.PUBLIC_URL}/api/uploads/banner/${item.banner}`} />
                                        </a>
                                      </div>
                                      <CardTitle tag="h5">
                                        <a href={`${process.env.PUBLIC_URL}/BusinessDetails/${item.user_id}`}>{item.business_name}</a>
                                      </CardTitle>
                                      <CardText>
                                      {(item.about_business && item.about_business.length >= 100) ? (item.about_business.substring(0, 116) + "...") : item.about_business == 'null' ? '' : item.about_business}
                                      </CardText>
                                      <Button><a href={`${process.env.PUBLIC_URL}/BusinessDetails/${item.user_id}`}> SEE DETAILS</a></Button>
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

export default HotDealsListing;