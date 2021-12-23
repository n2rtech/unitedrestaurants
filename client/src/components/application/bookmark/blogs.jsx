import React, { Fragment, useEffect , useState } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Container, Row, Col, Card, CardBody, CardHeader, Nav, NavItem, TabContent, TabPane, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Button, Table } from 'reactstrap'
import { useParams } from "react-router-dom";
import axios from 'axios';
import {toast} from 'react-toastify';

const Blogs = (props) => {
  const token = localStorage.getItem("token");
  const params = useParams();	
  const [blogDetails, setBlogDetails] = useState([]);

  useEffect(() => {
  
    const config = {
        headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*', 'Authorization': 'JWT '+token}
        };

	axios.get('/api/blogs/' , config).then((response) => {
		setBlogDetails(response.data);
	  });

  }, []);
  console.log(blogDetails);

   // Delete functionality

   const handleDelete = (id) => {
    const config = {
      headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token }
      };

      axios.delete(`/api/blogs/`+`${id}`,config
      ) .then(response => {
        toast.success("Blog Deleted !")
        setTimeout(() => {
            window.location.reload();
        }, 1000);
      })
         .catch(error => console.log('Form submit error', error))
    
  }

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
              <a className="btn btn-primary" href={`${process.env.PUBLIC_URL}/dashboard/admin/add-blog/`}>Add New</a>
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
                       <a className="btn btn-success" href={`${process.env.PUBLIC_URL}/dashboard/admin/edit-blog/${item.id}/`}>Edit</a> &nbsp;
                       <Button color="danger" onClick={() => handleDelete(item.id)}>Delete</Button>
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