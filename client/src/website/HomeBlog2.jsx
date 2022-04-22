import React,{useState,useEffect} from 'react';
import Carousel from "react-multi-carousel";
import { Container, Col, Card, CardTitle, CardText, Button} from 'reactstrap'
import "react-multi-carousel/lib/styles.css";

const HomeBlog2 = () => {

  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
  
    const config = {
        headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*', 'Authorization': 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IktyaXNobmEgTWlzaHJhIiwiZW1haWwiOiJrcmlzaG5hQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYzNjcwMzYxOCwiZXhwIjoxNjY4MjYwNTQ0fQ.eIG5Q29TaWU_B3-SpXQp38ROC3lO7dRCUTog5wkPWwQ'}
        };
 
    fetch("/api/blogs/get" , config)
      .then(res => res.json())
      .then(
        (result) => {
          
          setBlogData(result);
        },
        (error) => {
          
        }
      )
  }, []);

  const addDefaultSrc = (ev) => {
    ev.target.src = `${process.env.PUBLIC_URL}/assets/images/h5.jpeg`;
  }


  return (
      <Container>
        <div className="blogs-section hotdeals">
          <h4>For you to read</h4>
          <div style={{ position: "relative" }}>
            <Carousel responsive={responsive}>
            {blogData.map((blog , i ) => (

              <div className="customcard" key={i}>
                { blog.show_on_home  == 1 ? 
                <Card>
                  <div className="hImage">
                  <a href={`${process.env.PUBLIC_URL}/blog/blogdetails/${blog.id}`}>
                      <img onError={addDefaultSrc} src={`${process.env.PUBLIC_URL}/api/uploads/blogs/${blog.image}`} 
                     alt="Menu-Icon" className="img-fluid" />
                    </a>
                  </div>
                  <CardTitle tag="h5">
                  <a href={`${process.env.PUBLIC_URL}/blog/blogdetails/${blog.id}`}>{blog.name}</a>
                  </CardTitle>
                  <p>{blog.createdAt}</p>
                  <CardText>
                     <div dangerouslySetInnerHTML={{__html: `<p>${(blog.content).substring(0, 270)}...</p>`}} />
                  </CardText>
                  <Button><a href={`${process.env.PUBLIC_URL}/blog/blogdetails/${blog.id}`} className="readmore">READ MORE</a></Button>
                </Card>
                :
              
                ''
              
              }
              
              </div> 
               ))}
            </Carousel>
          </div>
        </div>
      </Container>
  )
}

export default HomeBlog2;
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
