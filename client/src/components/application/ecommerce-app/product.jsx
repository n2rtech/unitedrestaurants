import React, { useState, useEffect, Fragment } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col, Table ,Card, CardHeader, CardBody, Button, ListGroup, Form, FormGroup, Input, Media, Modal, ModalHeader, ModalBody, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap'

const Product = (props) => {


const [categoryData, setCategoryData] = useState([]);

useEffect(() => {

    const config = {
        headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IktyaXNobmEgTWlzaHJhIiwiZW1haWwiOiJrcmlzaG5hQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYzNzEyNTI5NSwiZXhwIjoxNjY4NjgyMjIxfQ.XQnBPN7Vc1zahxytp0YiGQG9DUOs7SU94tFtEvQiX78' }
        };

        
    fetch("/api/categories" , config)
      .then(res => res.json())
      .then(
        (result) => {
          
          setCategoryData(result);
        },
        (error) => {
          
        }
      )
  }, []);

console.log(categoryData);

  return (
    <Fragment>
      <Breadcrumb parent="Ecommerce" title="Product" />
      <Container fluid={true} className="product-wrapper">
        <div className="product-grid">
          <div className="feature-products">
            <Row>
              <Col md="12" className="products-total">
              <div className="table-responsive">
                                <Table>
                                    <thead>
                                        <tr>
                                            <th scope="col">{"#"}</th>
                                            <th scope="col">{"Name"}</th>
                                            <th scope="col">{"Description"}</th>
                                            <th scope="col">{"Image"}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {categoryData.map((item , i ) => (
                                         <tr>
                                              <th scope="row">{i}</th>
                                              <th scope="row">{item.name}</th>
                                              <th scope="row">{item.description}</th>
                                              <th scope="row">{item.image}</th>
                                         </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
              </Col>
              
            </Row>
              </div>
              </div>
      </Container>
    </Fragment>
  );
}

export default Product;