import React, { Fragment, useEffect , useState } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Table, Container, Row, Col, Card, CardBody, CardHeader, Nav, NavItem, TabContent, TabPane, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Button } from 'reactstrap'
import {toast} from 'react-toastify';
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import SweetAlert from 'sweetalert2'

const VendorCoupon = (props) => {

  const [couponData, setCouponData] = useState([]);
  const token = localStorage.getItem("token");
  const history = useHistory()
  useEffect(() => {
  
      const config = {
          headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token }
      };
   
      fetch("/api/vendor-coupons" , config)
        .then(res => res.json())
        .then(
          (result) => {
            setCouponData(result);
          },
          (error) => {
            
          }
        )
    }, []);

    console.log(couponData);

       // Delete functionality

  const handleDelete = (id) => {
    SweetAlert.fire({
      title: 'Are you sure?',
      text: "Once deleted, you will not be able to recover this coupon!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Ok',
      cancelButtonText: 'cancel',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        const config = {
          headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token }
          };
    
          axios.delete(`/api/vendor-coupons/`+`${id}`,config
          ) .then(response => {
            toast.success("Coupon Deleted !")
            setTimeout(() => {
              window.location.reload();
            }, 1000);
          })
             .catch(error => console.log('Form submit error', error))
        
        SweetAlert.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
      else {
        SweetAlert.fire(
          'Coupon is safe!'
        )
      }
    })
  }


  return (
    <Fragment>
      <Breadcrumb parent="Apps" title="Deals or Promotions" />
      <Container fluid={true}>
        <Card>
          <CardBody>
          <Row className="m-b-20">
            <Col sm="6"></Col>
            <Col sm="6">
              <div className="pull-right">
                <a href={`${process.env.PUBLIC_URL}/dashboard/vendor/add-vendor-coupon`} className="btn btn-primary">Add New</a>
              </div>
            </Col>
          </Row>
            <div className="table-responsive">
              <Table>
                <thead>
                    <tr>
                        <th scope="col">{"Deals Name"}</th>
                        <th scope="col" className="text-right">{"Action"}</th>
                    </tr>
                </thead>
                <tbody>
                {couponData.map((item , i) => (
                   <tr>
                   <td>{item.deal_name}</td>
                   <td className="text-right">
                     <a href={`${process.env.PUBLIC_URL}/dashboard/vendor/edit-vendor-coupon/${item.id}/`} className="btn btn-success">Edit</a> &nbsp;
                     <a onClick={() => handleDelete(item.id)}className="btn btn-danger">Delete</a> 
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

export default VendorCoupon;