import React, { Fragment, useState , useEffect } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Table, Container, Row, Col, Card, CardBody, CardHeader, Nav, NavItem, TabContent, TabPane, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Button } from 'reactstrap'
import { useParams } from "react-router-dom";
import {toast} from 'react-toastify';
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const AddVendorCoupon = (props) => {

  const [dealname, setDealname] = useState()
  const [description, setDescription] = useState()
  const [discount, setDiscount] = useState(0)
  const [startdate, setStartDate] = useState()
  const [enddate, setEndDate] = useState()
  const params = useParams();
  const token = localStorage.getItem("token");
  const id = localStorage.getItem("id");
  const vendor_country_id = localStorage.getItem("vendor_country_id");

  const onChangeDealname = (event) => {
    setDealname(event.target.value);
  };

  const onChangeDescription = (event) => {
    setDescription(event.target.value);
  };

  const onChangeDiscount = (event) => {
    setDiscount(event.target.value);
  };

  const onChangeStartDate = (event) => {
    setStartDate(event.target.value);
  }

  const onChangeEndDate = (event) => {
    setEndDate(event.target.value);
  }

  const [userdetails, setUserDetails] = useState()
  useEffect(() => {
    const GetData = async () => {
        const config = {
    headers: {'Authorization': 'JWT '+token }
  };
      const result = axios.get('/api/vendors/'+`${id}`,config);
      setUserDetails(result.data)
    };
    GetData();
  }, []);

  console.log('User Details', userdetails);
// Add Video Api
const history = useHistory()

const handleSubmit = event => {
  event.preventDefault();

  const config = {
    headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token }
    };
    const bodyParameters = {
      deal_name: dealname,
      deal_description: description,
      user_id : id,
      discount: discount,
      start_date: startdate,
      end_date: enddate,
      country_id: vendor_country_id
    };

    console.log('BODY PARAMETERS' , bodyParameters);


    axios.post(`/api/vendor-coupons/`,
      bodyParameters,
      config
    ) .then(response => {
      toast.success("Coupon / Deals Added !")
        setTimeout(() => {
          history.push('/dashboard/vendor/vendor-coupon/');
        }, 1000);
    }  
    
    )
       .catch(error => console.log('Form submit error', error))


};

console.log('User Details', userdetails);
console.log('Vendor Country Id' , vendor_country_id);

  return (
    <Fragment>
      <Breadcrumb parent="Apps" title="Deals or Promotions" />
      <Container fluid={true}>
        <Card>
          <CardBody>
            <Form className="form theme-form">
              <FormGroup>
                <Label htmlFor="exampleFormControlInput1">{"Deal name"}</Label>
                <Input className="form-control" value = {dealname} onChange = {onChangeDealname} type="text" />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="exampleFormControlInput1">{"Description"}</Label>
                <Input type="textarea" value = {description} onChange = {onChangeDescription}  className="form-control"  rows="3"/>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="exampleFormControlInput1">{"Discount Percentage"}</Label>
                <Input type="text" className="form-control" value = {discount} onChange = {onChangeDiscount}   />
              </FormGroup>
              <FormGroup>
                <Label>{"Start Date"}</Label>
                <Input className="form-control digits" type="date" value = {startdate} onChange = {onChangeStartDate} />
              </FormGroup>
              <FormGroup>
                <Label>{"End Date"}</Label>
                <Input className="form-control digits" type="date" value = {enddate}  onChange = {onChangeEndDate}  />
              </FormGroup>
              <FormGroup>
                <Button  color="primary" onClick = {handleSubmit} >{"Save"}</Button>
              </FormGroup>
            </Form>
          </CardBody>
        </Card>  
      </Container>
    </Fragment>
  );
}

export default AddVendorCoupon;