import React,{useState,useMemo} from 'react';
import { Container, Row, Col,  List, ListInlineItem } from 'reactstrap'
import 'react-tabs/style/react-tabs.css';
import { useParams } from "react-router-dom";
import axios from 'axios'
import moment from 'moment';
const Detailpage = (props) => {

  const params = useParams();	
  const [blogDetails, setBlogDetails] = useState([]);

  useMemo(() => {
  
    const config = {
        headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*', 'Authorization': 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IktyaXNobmEgTWlzaHJhIiwiZW1haWwiOiJrcmlzaG5hQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYzNjcwMzYxOCwiZXhwIjoxNjY4MjYwNTQ0fQ.eIG5Q29TaWU_B3-SpXQp38ROC3lO7dRCUTog5wkPWwQ'}
        };

	axios.get('/api/blogs/'+`${params.id}` , config).then((response) => {
		setBlogDetails(response.data);
	  });

  }, []);


  const addDefaultSrc = (ev) => {
	ev.target.src = `${process.env.PUBLIC_URL}/api/uploads/banner/thumbnail.jpg`;
  }

  return (
	
    <div className="blogsingle">             
      <Container>    
	  
      <Row className="m-0">
		  
	  
        <Col sm="12" xs="12">
		
        <div className="blogmedia">
        	<img onError = {addDefaultSrc} src={`${process.env.PUBLIC_URL}/api/uploads/blogs/${blogDetails.image}`} 
                     alt="blog-single" className="img-fluid" />
          </div>  
          <div className="blog-social">
          <List type="inline">
			  <ListInlineItem>
			    <span>
					{ blogDetails !== '' ? moment(blogDetails.createdAt).fromNow()  : '' }
					
					</span>
			  </ListInlineItem>
			</List>   
			</div>   
			<h2>{blogDetails.name}</h2> 
			<hr/> 
			<div className="Comments">
			
				<div dangerouslySetInnerHTML={{__html: `<p>${blogDetails.content}</p>`}} />


			</div> 
						
        </Col>
        </Row>
		
        
      </Container>
    </div>
  );
}

export default Detailpage;
