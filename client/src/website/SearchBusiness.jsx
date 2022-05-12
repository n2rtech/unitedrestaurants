import React,{useState,useEffect} from 'react';
import Header2 from './header2.jsx'
import Footer2 from './footer2.jsx'
import SearchBar from './SearchBar.jsx'
import Carousel from "react-multi-carousel";
import { Container, Row, Col, Card, CardTitle, CardText, Button } from 'reactstrap'
import { useParams } from "react-router-dom";
import axios from 'axios';
import "react-multi-carousel/lib/styles.css";
import InfiniteScroll from 'react-infinite-scroll-component';

const SearchBusiness = (props) => {

  const params = useParams();
  var base64 = require('base-64');
  var decodedData = base64.decode(`${params.id}`);

  const [items , setItems] = useState([]);
  const [hasMore, sethasMore] = useState(true);

  const [page, setPage] = useState(1);
  const [size, setSize] = useState(3);
  const [filter, setFilter] = useState('');
  const [categoryName, setCategoryName] = useState('');
  const [country, setCountry] = useState(localStorage.getItem('country_code'));
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const getComments = async () => {
      var config1 = {
        method: 'get',
        url: '/api/vendors/by-serach/all?'+`${decodedData}`,
        headers: { 
          'Content-Type': 'application/json'
        },
        params : {
          'page': page,
          'size': size,
          'new' : 1
        }
      };

      await axios(config1)
      .then(function (result) {
        setItems(result.data.data);
      })
      .catch(function (error) {
      });

  
    };
    setPage(page + 1);
    getComments();
   }, []);

   const fetchComments = async () => {

    let url = `/api/vendors/by-serach/all?${decodedData}&page=${page}&size=${size}`;
    const res = await axios.get(url);
    const data = res.data.data;
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

      var config = {
        method: 'get',
        url: '/api/categories/getCatById/'+`${params.id}`,
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

  return (
      <Container fluid={true} className="p-0">
        <Header2/>
        <SearchBar/>
        <Container>
          <div className="hotdeals SearchBusiness">
            <h4>{categoryName}</h4>
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
                          <a href={`${process.env.PUBLIC_URL}/BusinessDetails/${item.user_id}`}>
                            <img onError={addDefaultSrc} src={`${process.env.PUBLIC_URL}/api/uploads/banner/${item.banner}`} />
                          </a>
                        </div>
                        <CardTitle tag="h5">
                          <a href={`${process.env.PUBLIC_URL}/BusinessDetails/${item.user_id}`}>{item.business_name}</a>
                        </CardTitle>
                        <CardText>
                          {(item.about_business && item.about_business.length <= 400) ? item.about_business : `${item.about_business.substring(0, 400)}`+'...'}
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
             : <p style={{ textAlign:'center' }}>There are no listing found!</p> }
          </div>
        </Container>
        <Footer2/>
      </Container>
  );
}

export default SearchBusiness;