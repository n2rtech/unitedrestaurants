import React,{useState,useEffect} from 'react';
import { Container, Row, Col, Card, CardTitle, CardText, Button } from 'reactstrap'
import { useParams } from "react-router-dom";
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';

const Restaurantlist = (props) => {
  const params = useParams();
  const [items , setItems] = useState([]);
  const [hasMore, sethasMore] = useState(true);

  const [page, setPage] = useState(1);
  const [size, setSize] = useState(3);
  const [filter, setFilter] = useState('');
  const [country, setCountry] = useState(localStorage.getItem('country_code'));
  const [showMore, setShowMore] = useState(false);
  
  useEffect(() => {
    const getComments = async () => {
      var config1 = {
        method: 'get',
        url: '/api/latest-additions?country='+`${country}`,
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

      await axios(config1)
      .then(function (result) {
        setItems(result.data);
      })
      .catch(function (error) {
      });

    };
    setPage(page + 1);
    getComments();
   }, []);


   const fetchComments = async () => {

    let url = '/api/latest-additions?country='+`${country}`+`?filter=${filter}&country=${country}&page=${page}&size=${size}`;
    const res = await axios.get(url);
    const data = res.data;
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

  const addDefaultSrc = (ev) => {
    ev.target.src = `${process.env.PUBLIC_URL}/assets/images/resturent/resturentimg1.jpg`;
  }

  console.log("Items Length" , items);

  return (
    <div className="resturentlist">
      <h1>{params.cat}</h1>              
      <Container className="p-0">
        <div className="hr">
          <img src={`${process.env.PUBLIC_URL}/assets/images/hr.png`} alt="Menu-Icon"/>
        </div>

        { (items && items.length) ? 
      <Row className="m-0">
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
                                        {showMore ? item.about_business : `${item.about_business.substring(0, 400)}`+'...'}
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
      </Container>
    </div>
  );
}

export default Restaurantlist;
