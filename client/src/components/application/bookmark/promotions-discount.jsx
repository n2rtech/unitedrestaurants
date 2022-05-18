import React, { Fragment, useState , useEffect } from 'react';
import axios from 'axios';
import Breadcrumb from '../../../layout/breadcrumb';
import { Table, Container, Card, Row, Col,CardBody,Button, ButtonGroup } from 'reactstrap';
import {toast} from 'react-toastify';

const PromotionsDiscount = (props) => {

  const [result, setResult] = useState([]);

  useEffect(() => {
    const config = {
      headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+localStorage.getItem('token') }
      };
      
      axios.get(`/api/coupons`,
        config
      ) .then(response => {
        setResult(response.data)
      }  
      
      )
         .catch(error => console.log('Form submit error', error))
  },[]);

  return (
    <Fragment>
      <Breadcrumb parent="Apps" title="Promotions/Discount" />
      <Container fluid={true}>
        <Card>
          <CardBody>
          <Row className="m-b-20">
            <Col sm="6"></Col>
            <Col sm="6">
              <div className="pull-right">
                <a href={`${process.env.PUBLIC_URL}/dashboard/${localStorage.getItem("role")}/add-promotion-coupon/`} className="btn btn-primary">Add New</a>
              </div>
            </Col>
          </Row>
            <div className="table-responsive">
              <Table>
                <thead>
                    <tr>
                        <th scope="col">{"Coupon Name"}</th>
                        <th scope="col">{"Coupon Code"}</th>
                        <th scope="col" className="text-right">{"Action"}</th>
                    </tr>
                </thead>
                <tbody>
                  {result && result.map((item,i) => (
                      <tr key={i}>
                      <td>{item.name}</td>
                      <td>{item.code}</td>
                      <td className="text-right">
                      <ButtonGroup>
                        <a className="btn btn-success" href={`${process.env.PUBLIC_URL}/dashboard/${localStorage.getItem("role")}/edit-promotions-discount/${item.id}`}>Edit</a> &nbsp;
                        <Button color="danger">Delete</Button>
                      </ButtonGroup>
                        
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

export default PromotionsDiscount;