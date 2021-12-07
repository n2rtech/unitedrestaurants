import React, { Fragment, useEffect , useState } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Container, Row, Col, Card, CardBody, CardHeader, Nav, NavItem, TabContent, TabPane, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Button, Table } from 'reactstrap'
import { useParams } from "react-router-dom";
import axios from 'axios'


const Blogs = (props) => {

  const params = useParams();	
  const [blogDetails, setBlogDetails] = useState([]);

  useEffect(() => {
  
    const config = {
        headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*', 'Authorization': 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IktyaXNobmEgTWlzaHJhIiwiZW1haWwiOiJrcmlzaG5hQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYzNjcwMzYxOCwiZXhwIjoxNjY4MjYwNTQ0fQ.eIG5Q29TaWU_B3-SpXQp38ROC3lO7dRCUTog5wkPWwQ'}
        };

	axios.get('/api/blogs/' , config).then((response) => {
		setBlogDetails(response.data);
	  });

  }, []);
  console.log(blogDetails);

  return (
    <Fragment>
      <Breadcrumb parent="Apps" title="Blogs" />
      <Container fluid={true}>
        <Card>
        <CardBody>
        <Row>
          <Col sm="6"></Col>
          <Col sm="6">
            <div className="pull-right">
              <a className="btn btn-primary" href={`${process.env.PUBLIC_URL}/dashboard/admin/add-blog`}>Add New</a>
            </div>
          </Col>
        </Row>
          <div className="table-responsive m-t-20">
              <Table>
                  <thead>
                      <tr>
                          <th scope="col">{"Name"}</th>
                          <th scope="col" className="text-right">{"Action"}</th>
                      </tr>
                  </thead>
                  <tbody>
                  {blogDetails.map((item , i) => (
                   <tr key={i}>
                     <td>{item.name}</td>
                     <td className="text-right">
                       <a className="btn btn-success" href={`${process.env.PUBLIC_URL}/dashboard/admin/edit-blog/${item.id}`}>Edit</a> &nbsp;
                       <Button color="danger">Delete</Button>
                     </td>
                    </tr>
                  ))}
                  </tbody>
              </Table>
          </div>
        </CardBody>
        </Card>
      </Container>
    </Fragment>
  );
}

export default Blogs;